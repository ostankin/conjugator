import { EnglishVerbs, RussianVerbs } from './verbs.js';
import { BaseEnglishVerb, BaseRussianVerb } from './base-verbs.js';
import { CONJ_SELECTOR_LENGTH } from './constants.js';
import { getBySelector } from './selector.js'

export function Conjugator(verb) {
  this.verb = verb;
  if (verb instanceof BaseEnglishVerb) {
    this.conjugator = EnglishConjugator;
    this.pronouns = EnglishPronouns;
  }
  if (verb instanceof BaseRussianVerb) {
    this.conjugator = RussianConjugator;
    this.pronouns = RussianPronouns;
  }
}

Conjugator.prototype.getSentence = function(tenseSelector, conjSelector, additionalSelector) {
  var verb = this.verb;
  var pattern = getBySelector(this.conjugator, tenseSelector, true);
  var verb = this.verb;
  var pronoun;
  if (typeof conjSelector != 'undefined') {
    pronoun = getBySelector(this.pronouns, conjSelector);
    if (typeof additionalSelector != 'undefined') {
      if (conjSelector.length < CONJ_SELECTOR_LENGTH) {
        var selectorPadding = new Array(CONJ_SELECTOR_LENGTH - conjSelector.length).fill("")
        conjSelector = conjSelector.concat(selectorPadding)
      }
      conjSelector = conjSelector.concat(additionalSelector);
    }
    pattern = getBySelector(pattern, conjSelector);
  }
  return eval(pattern);
}

var EnglishPronouns = {
  singular: {
    first: "I",
    second: "you",
    third: {
      default: "he",
      feminine: "she",
      neutral: "it"
    }
  },
  plural: {
    first: "we",
    second: "you",
    third: "they"
  }
}

var EnglishConjugator = {
  infinitive: '"to " + verb.baseForm',
  affirmative: {
    present: {
      singular: {
        default: 'pronoun + " " + verb.baseForm',
        third: {
          default: 'pronoun + " " + verb.thirdPersonSingular'
        }
      },
      plural: {
        default: 'pronoun + " " + verb.baseForm'
      }
    },
    past: {
      default: 'pronoun + " " + verb.form2',
    },
    future: {
      default: 'pronoun + " will " + verb.baseForm',
    },
  },
  negative: {
    present: {
      singular: {
        default: {
          default: {
            default: 'pronoun + " do not " + verb.baseForm',
            short: 'pronoun + " don\'t " + verb.baseForm'
          }
        },
        third: {
          default: {
            default: 'pronoun + " does not " + verb.baseForm',
            short: 'pronoun + " doesn\'t " + verb.baseForm'
          }
        }
      },
      plural: {
        default: {
          default: {
            default: 'pronoun + " do not " + verb.baseForm',
            short: 'pronoun + " don\'t " + verb.baseForm'
          }
        }
      }
    },
    past: {
      default: {
        default: {
          default: {
            default: 'pronoun + " did not " + verb.baseForm',
            short: 'pronoun + " didn\'t " + verb.baseForm'
          }
        }
      }
    },
    future: {
      default: {
        default: {
          default: {
            default: 'pronoun + " will not " + verb.baseForm',
            short: 'pronoun + " won\'t " + verb.baseForm'
          }
        }
      }
    }
  },
  question: {
    present: {
      singular: {
        default: '"do " + pronoun + " " + verb.baseForm + "?"',
        third: '"does " + pronoun + " " + verb.baseForm + "?"'
      },
      plural: {
        default: '"do " + pronoun + " " + verb.baseForm + "?"'
      }
    },
    past: {
      default: {
        default: {
          default: '"did " + pronoun + " " + verb.baseForm + "?"'
        }
      }
    },
    future: {
      default: {
        default: {
          default: '"will " + pronoun + " " + verb.baseForm + "?"'
        }
      }
    }
  }
}

var RussianPronouns = {
  singular: {
    first: "я",
    second: "ты",
    third: {
      default: "он",
      feminine: "она",
      neutral: "оно"
    }
  },
  plural: {
    first: "мы",
    second: "вы",
    third: "они"
  }
}

var RussianConjugator = {
  infinitive: 'verb.infinitive',
  affirmative: {
    present: {
      default: 'pronoun + " " + verb.getPresentForm(conjSelector)'
    },
    past: {
      default: 'pronoun + " " + verb.getPastForm(conjSelector)',
    },
    future: {
      singular: {
        first: 'pronoun + " буду " + verb.infinitive',
        second: 'pronoun + " будешь " + verb.infinitive',
        third: 'pronoun + " будет " + verb.infinitive'
      },
      plural: {
        first: 'pronoun + " будем " + verb.infinitive',
        second: 'pronoun + " будете " + verb.infinitive',
        third: 'pronoun + " будут " + verb.infinitive'
      }
    }
  },
  negative: {
    present: {
      default: 'pronoun + " не " + verb.getPresentForm(conjSelector)'
    },
    past: {
      default: 'pronoun + " не " + verb.getPastForm(conjSelector)',
    },
    future: {
      singular: {
        first: 'pronoun + " не буду " + verb.infinitive',
        second: 'pronoun + " не будешь " + verb.infinitive',
        third: 'pronoun + " не будет " + verb.infinitive'
      },
      plural: {
        first: 'pronoun + " не будем " + verb.infinitive',
        second: 'pronoun + " не будете " + verb.infinitive',
        third: 'pronoun + " не будут " + verb.infinitive'
      }
    }
  },
  question: {
    present: {
      default: 'verb.getPresentForm(conjSelector) + " ли " + pronoun + "?"'
    },
    past: {
      default: 'verb.getPastForm(conjSelector) + " ли " +  pronoun + "?"',
    },
    future: {
      singular: {
        first: '"буду ли " + pronoun + " " + verb.infinitive + "?"',
        second: '"будешь ли " + pronoun + " " + verb.infinitive + "?"',
        third: '"будет ли " + pronoun + " " + verb.infinitive + "?"'
      },
      plural: {
        first: '"будем ли " +  pronoun + " " + verb.infinitive + "?"',
        second: '"будете ли " + pronoun + " " + verb.infinitive + "?"',
        third: '"будут ли " + pronoun + " " + verb.infinitive + "?"'
      }
    }
  }
}
