import { EnglishVerbs, RussianVerbs } from './app/verbs.js';
import { SentenceMatcher } from './app/sentence-matcher.js';
import { ViewController } from './viewcontroller.js';

export default function () {
  var sentenceMatcher = new SentenceMatcher();
  var viewController = new ViewController(sentenceMatcher);
  sentenceMatcher.generateRandomPhrase();
  document.getElementById('startAgain')
    .addEventListener('click', function() { viewController.startAgain(false) });
  document.getElementById('sameVerbAgain')
    .addEventListener('click', function() { viewController.startAgain(true) });
  document.getElementById('showAnswer')
    .addEventListener('click', viewController.showAnswer);
  document.getElementById('showHint')
    .addEventListener('click', viewController.showHint);
  viewController.showChallenge();
}
