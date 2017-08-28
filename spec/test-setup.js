import { Conjugator } from '../src/js/app/conjugator.js';
import { EnglishVerbs, RussianVerbs } from '../src/js/app/verbs.js';
import { SentenceMatcher } from '../src/js/app/sentence-matcher.js';

export function app() {
  var app = {};
  app.Conjugator = Conjugator;
  app.EnglishVerbs = EnglishVerbs;
  app.RussianVerbs = RussianVerbs;
  app.SentenceMatcher = SentenceMatcher;
  return app;
}
