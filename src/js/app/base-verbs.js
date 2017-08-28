import { getBySelector } from './selector.js'
import { CONJ_SELECTOR_LENGTH } from './constants.js'

// Глаголы с "у" в первом лице настоящего времени ("иду", "вижу")
export const CT1_U = 0;
// Глаголы с "ю" в первом лице настоящего времени ("люблю", "сплю")
export const CT1_JU = 1;
// Глаголы первого спряжения ("знает", "бреет")
export const CT2_I = 0;
// Глаголы второго спряжения ("видит", "любит")
export const CT2_II = 1;

export function BaseEnglishVerb(baseForm, form2, form3, form4) {
  this.baseForm = baseForm;
  this.form2 = form2;
  this.form3 = form3;
  this.form4 = form4;
  this.generateForms(baseForm);
}
BaseEnglishVerb.prototype.generateForms = function(baseForm) {
  var reducedForm, edForm, ingForm;
  if (this.baseForm.slice(-1) == "e") {
    reducedForm = this.baseForm.slice(0, -1);
  }
  else {
    reducedForm = baseForm;
  }
  edForm = reducedForm + "ed";
  ingForm = reducedForm + "ing";

  this.form2 = this.form2 || edForm;
  this.form3 = this.form3 || this.form2;
  this.form4 = this.form4 || ingForm;
  this.thirdPersonSingular = (function(){
    var ending = "s";
    var lastChar = baseForm.slice(-1);
    switch (lastChar) {
      case "s":
      case "o":
        ending = "es";
        break;
      case "y":
        if (baseForm.slice(-2,-1) != "u") // exception for "buy - buys"
          baseForm = baseForm.slice(0, -1) + "ie"
        break;
    }
    return baseForm + ending;
  }());
};

export function BaseRussianVerb(infinitive, presentBaseForm, conjType1, conjType2, pastBaseForm, exceptions) {
  this.infinitive = infinitive;
  this.presentBaseForm = presentBaseForm;
  this.pastBaseForm = pastBaseForm;
  this.conjType1 = conjType1;
  this.conjType2 = conjType2;
  this.reflexive = ( this.infinitive.slice(-2) == "ся");
  this.exceptions = exceptions;

  this.generateForms();

  this.presentForms = {
    singular: {
      first: {
        default: 'this.presentFirstPersonBase + this.presentSingularFirstEnding'
      },
      second: {
        default: 'this.presentBaseForm + this.presentSingularSecondEnding + "шь"'
      },
      third: {
        default: 'this.presentBaseForm + this.presentSingularSecondEnding + "т"'
      }
    },
    plural: {
      first: {
        default: 'this.presentBaseForm + this.presentSingularSecondEnding + "м"'
      },
      second: {
        default: 'this.presentBaseForm + this.presentSingularSecondEnding + "те"'
      },
      third: {
        default: 'this.presentBaseForm + this.presentPluralThirdEnding'
      }
    }
  }

  this.pastForms = {
    singular: {
      default: {
        masculine: 'this.pastBaseForm + "л"',
        feminine: 'this.pastBaseForm + "ла"',
        neutral: 'this.pastBaseForm + "ло"'
      }
    },
    plural: {
      default: {
        default: 'this.pastBaseForm + "ли"'
      }
    }
  }
}
BaseRussianVerb.prototype.getPresentForm = function(selector) {
  var presentExceptions = getBySelector(this.exceptions, ["present"], true);
  var exception = getBySelector(presentExceptions, selector);
  if (typeof exception != 'undefined')
    return exception;
  var x = getBySelector(this.presentForms, selector);
  var evaluatedForm = eval(x);
  return this.addReflexion(evaluatedForm);
}
BaseRussianVerb.prototype.getPastForm = function(selector) {
  var pastExceptions = getBySelector(this.exceptions, ["past"], true);
  // gender not specified, default to masculine
  if (selector.length < CONJ_SELECTOR_LENGTH ) {
    selector = selector.concat(["masculine"]);
  }
  var exception = getBySelector(pastExceptions, selector);
  if (typeof exception != 'undefined')
    return exception;
  var evaluatedForm = eval(getBySelector(this.pastForms, selector));
  return this.addReflexion(evaluatedForm);
}
BaseRussianVerb.prototype.addReflexion = function (form) {
  if (this.reflexive) {
    var lastLetter = form.slice(-1);
    var vowels = ['а','и','о','у','ю','э','ю','я']; // "е" не входит!
    var postfix;
    if (vowels.indexOf(lastLetter) > -1 ) {
      postfix = "сь";
    } else {
      postfix = "ся";
    }
    return form + postfix;
  } else {
    return form;
  }

};
BaseRussianVerb.prototype.generateForms = function() {
  this.presentFirstPersonBase = this.presentBaseForm;

  var presentBaseLastChar = this.presentBaseForm.slice(-1);
  if (this.conjType1 == CT1_U)
    this.presentSingularFirstEnding = "у";
  if (this.conjType1 == CT1_JU)
    this.presentSingularFirstEnding = "ю";

  if (this.conjType2 == CT2_I)
    this.presentSingularSecondEnding = "е";
  if (this.conjType2 == CT2_II)
    this.presentSingularSecondEnding = "и";

  if (this.pastBaseForm == undefined)
    this.pastBaseForm = this.presentBaseForm;

  this.presentPluralThirdEnding = this.presentSingularFirstEnding + "т";

  // exceptions
  if (this.conjType2 == CT2_II) {
    switch(presentBaseLastChar) {
      // Чередование "д-ж": "во[д]ишь - во[ж]у, ви[д]ишь - ви[ж]у
      case "д":
        this.presentFirstPersonBase = this.presentBaseForm.slice(0, -1) + "ж";
        this.presentPluralThirdEnding = "ят";
        break;
      // Чередование "с-ш": "ви[с]ишь - ви[ш]у, ко[с]ишь - ко[ш]у
      case "с":
        this.presentFirstPersonBase = this.presentBaseForm.slice(0, -1) + "ш";
        this.presentPluralThirdEnding = "ят";
        break;
      // Чередование "т-ч": "пла[т]ишь - пла[ч]у
      case "т":
        this.presentFirstPersonBase = this.presentBaseForm.slice(0, -1) + "ч";
        this.presentPluralThirdEnding = "ят";
        break;
      // "Л" в корне второго спряжения: "любишь - люб[л]ю, спишь - сп[л]ю"
      case "б":
      case "п":
      case "в":
      case "ф":
        if (this.conjType1 == CT1_JU) {
          this.presentFirstPersonBase += "л"
          this.presentPluralThirdEnding = "ят";
        }
        break;
      // "смотр[ю] - смотр[я]т"
      // "хран[ю] - хран[я]т"
      case "р":
      case "н":
        if (this.conjType1 == CT1_JU) {
          this.presentPluralThirdEnding = "ят";
        }
        break;
      // "держ[у] - держ[а]т", "слыш[у] - слыш[а]т"
      case "ж":
      case "ш":
        if (this.conjType1 == CT1_U) {
          this.presentPluralThirdEnding = "ат";
        }
        break;
    }
  }
}
