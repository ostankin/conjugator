export function ViewController(model) {
  var vc = this;
  vc.model = model;

  vc.setElementDisplayMode = function(elementName, displayMode) {
    var e = document.getElementById(elementName);
    e.style.display = displayMode ? "" : "none";
  }

  vc.showChallenge = function() {
    var rsElement = document.getElementById('russianSentence');
    rsElement.innerHTML = model.rSentence;
    var esElement = document.getElementById('englishSentence');
    esElement.innerHTML = "";
    vc.setElementDisplayMode("showHint", true);
    vc.setElementDisplayMode("verbHint", false);
    vc.setElementDisplayMode("showAnswer", true);
  }

  vc.showAnswer = function() {
    var esElement = document.getElementById('englishSentence');
    esElement.innerHTML = model.eSentence;
    vc.setElementDisplayMode("showHint", false);
    vc.setElementDisplayMode("verbHint", false);
    vc.setElementDisplayMode("showAnswer", false);
  }

  vc.startAgain = function(sameVerb) {
    model.generateRandomPhrase(sameVerb);
    vc.showChallenge();
  }

  vc.showHint = function() {
    var eInfinitive = model.eConj.getSentence(['infinitive']);
    var rInfinitive = model.rConj.getSentence(['infinitive']);
    var hintElement = document.getElementById('verbHint');
    hintElement.innerHTML = ["(", rInfinitive, "=", eInfinitive, ")"].join(" ");
    vc.setElementDisplayMode('verbHint', true);
    vc.setElementDisplayMode("showHint", false);
  }
}
