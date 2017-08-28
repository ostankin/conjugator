const testSetup = require('./out/conjugator');
const app = testSetup.app();

var EnglishVerbs = app.EnglishVerbs;
var RussianVerbs = app.RussianVerbs;
var SentenceMatcher = app.SentenceMatcher;

describe("SentenceMatcher", function() {
  it("should never have undefined in sentences", function() {
    var sentenceMatcher = new SentenceMatcher();
    for (var i=0; i<100; i++) {
      sentenceMatcher.generateRandomPhrase();
      expect(sentenceMatcher.rSentence).not.toContain("undefined");
      expect(sentenceMatcher.eSentence).not.toContain("undefined");
    }
  });

  it("should keep the verb when requested", function() {
    var sentenceMatcher = new SentenceMatcher();
    sentenceMatcher.generateRandomPhrase();
    var verb = sentenceMatcher.verb;
    for (var i=0; i<10; i++) {
      sentenceMatcher.generateRandomPhrase(true);
      expect(sentenceMatcher.verb).toEqual(verb);
    }
  });

  it("should never give non-third person with neutral gender", function() {
    var sentenceMatcher = new SentenceMatcher();
    sentenceMatcher.generateRandomPhrase();
    var verb = sentenceMatcher.verb;
    for (var i=0; i<100; i++) {
      sentenceMatcher.generateRandomPhrase();
      var personAndGender = [sentenceMatcher.person, sentenceMatcher.gender].join(" ");
      expect(personAndGender).not.toEqual('first neutral');
      expect(personAndGender).not.toEqual('second neutral');
    }
  });

});
