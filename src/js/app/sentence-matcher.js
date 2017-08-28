import { EnglishVerbs, RussianVerbs } from './verbs.js';
import { Conjugator } from './conjugator.js';
import { Statement, Tense, Count, Person, Gender } from './constants.js';

export function SentenceMatcher() {
  this.validVerbs = [];
  var that = this;
  Object.keys(EnglishVerbs).forEach(function(w){
    if (RussianVerbs[w] != undefined ) {
      that.validVerbs.push(w);
    }
  });
}

SentenceMatcher.prototype.getRandomElement = function(obj) {
  var arr = Object.keys(obj).map( function(key) { return obj[key]; });
  var idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

SentenceMatcher.prototype.jumbleUp = function (sameVerb) {
  if (!sameVerb) {
    this.verb = this.getRandomElement(this.validVerbs);
  }

  do {
    this.statementType = this.getRandomElement(Statement);
    this.tense = this.getRandomElement(Tense);
    this.number = this.getRandomElement(Count);
    this.person = this.getRandomElement(Person);
    this.gender = this.getRandomElement(Gender);
  }
  while (this.person != Person.THIRD && this.gender == Gender.NEUTRAL);
}

SentenceMatcher.prototype.generateRandomPhrase = function(sameVerb) {
  this.jumbleUp(sameVerb);
  this.rConj = new Conjugator(RussianVerbs[this.verb]);
  this.eConj = new Conjugator(EnglishVerbs[this.verb]);
  this.rSentence = this.rConj.getSentence(
    [this.statementType, this.tense],
    [this.number, this.person, this.gender]
  );
  this.eSentence = this.eConj.getSentence(
    [this.statementType, this.tense],
    [this.number, this.person, this.gender]
  );
}
