const testSetup = require('./out/conjugator');
const app = testSetup.app();

var EnglishVerbs = app.EnglishVerbs;
var RussianVerbs = app.RussianVerbs;
var Conjugator = app.Conjugator;

describe("Conjugator", function() {

  it("should get correct forms of 'work'", function() {
    var verb = EnglishVerbs["work"];
    expect(verb.baseForm).toEqual("work");
    expect(verb.form2).toEqual("worked");
    expect(verb.form3).toEqual("worked");
    expect(verb.form4).toEqual("working");
    expect(verb.thirdPersonSingular).toEqual("works");
  });

  it("should get correct forms of 'love'", function() {
    var verb = EnglishVerbs["love"];
    expect(verb.baseForm).toEqual("love");
    expect(verb.form2).toEqual("loved");
    expect(verb.form3).toEqual("loved");
    expect(verb.form4).toEqual("loving");
    expect(verb.thirdPersonSingular).toEqual("loves");
  });

  it("should get correct forms of 'go'", function() {
    var verb = EnglishVerbs["go"];
    expect(verb.baseForm).toEqual("go");
    expect(verb.form2).toEqual("went");
    expect(verb.form3).toEqual("gone");
    expect(verb.form4).toEqual("going");
    expect(verb.thirdPersonSingular).toEqual("goes");
  });

  it("should get correct forms of 'do'", function() {
    var verb = EnglishVerbs["do"];
    expect(verb.baseForm).toEqual("do");
    expect(verb.form2).toEqual("did");
    expect(verb.form3).toEqual("done");
    expect(verb.form4).toEqual("doing");
    expect(verb.thirdPersonSingular).toEqual("does");
  });


  it("should get correct forms of 'see'", function() {
    var verb = EnglishVerbs["see"];
    expect(verb.baseForm).toEqual("see");
    expect(verb.form2).toEqual("saw");
    expect(verb.form3).toEqual("seen");
    expect(verb.form4).toEqual("seeing");
    expect(verb.thirdPersonSingular).toEqual("sees");
  });

  it("should get correct forms of 'fly'", function() {
    var verb = EnglishVerbs["fly"];
    expect(verb.baseForm).toEqual("fly");
    expect(verb.form2).toEqual("flew");
    expect(verb.form3).toEqual("flown");
    expect(verb.form4).toEqual("flying");
    expect(verb.thirdPersonSingular).toEqual("flies");
  });

  it("should get correct forms of 'kiss'", function() {
    var verb = EnglishVerbs["kiss"];
    expect(verb.baseForm).toEqual("kiss");
    expect(verb.form2).toEqual("kissed");
    expect(verb.form3).toEqual("kissed");
    expect(verb.form4).toEqual("kissing");
    expect(verb.thirdPersonSingular).toEqual("kisses");
  });

  it("should get correct forms of 'buy'", function() {
    var verb = EnglishVerbs["buy"];
    expect(verb.baseForm).toEqual("buy");
    expect(verb.form2).toEqual("bought");
    expect(verb.form3).toEqual("bought");
    expect(verb.form4).toEqual("buying");
    expect(verb.thirdPersonSingular).toEqual("buys");
  });

  it("should get correct forms of 'sleep'", function() {
    var verb = EnglishVerbs["sleep"];
    expect(verb.baseForm).toEqual("sleep");
    expect(verb.form2).toEqual("slept");
    expect(verb.form3).toEqual("slept");
    expect(verb.form4).toEqual("sleeping");
    expect(verb.thirdPersonSingular).toEqual("sleeps");
  });

  it("should get correct forms of 'работать' in present", function() {
    var verb = RussianVerbs["work"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("работаю");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("работаешь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("работает");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("работаем");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("работаете");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("работают");
  });

  it("should get correct forms of 'работать' in past", function() {
    var verb = RussianVerbs["work"];
    expect(verb.getPastForm(["singular", "first"])).toEqual("работал");
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("работал");
    expect(verb.getPastForm(["singular", "first", "feminine"])).toEqual("работала");
    expect(verb.getPastForm(["singular", "first", "neutral"])).toEqual("работало");
    expect(verb.getPastForm(["singular", "second"])).toEqual("работал");
    expect(verb.getPastForm(["singular", "second", "masculine"])).toEqual("работал");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("работала");
    expect(verb.getPastForm(["singular", "second", "neutral"])).toEqual("работало");
    expect(verb.getPastForm(["singular", "third"])).toEqual("работал");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("работал");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("работала");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("работало");
    expect(verb.getPastForm(["plural", "first"])).toEqual("работали");
    expect(verb.getPastForm(["plural", "second", "masculine"])).toEqual("работали");
    expect(verb.getPastForm(["plural", "third", "feminine"])).toEqual("работали");
  });

  it("should get correct forms of 'идти' in present", function() {
    var verb = RussianVerbs["go"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("иду");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("идешь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("идет");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("идем");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("идете");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("идут");
  });

  it("should get correct forms of 'идти' in past", function() {
    var verb = RussianVerbs["go"];
    expect(verb.getPastForm(["singular", "first"])).toEqual("шел");
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("шел");
    expect(verb.getPastForm(["singular", "first", "feminine"])).toEqual("шла");
    expect(verb.getPastForm(["singular", "first", "neutral"])).toEqual("шло");
    expect(verb.getPastForm(["singular", "second"])).toEqual("шел");
    expect(verb.getPastForm(["singular", "second", "masculine"])).toEqual("шел");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("шла");
    expect(verb.getPastForm(["singular", "second", "neutral"])).toEqual("шло");
    expect(verb.getPastForm(["singular", "third"])).toEqual("шел");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("шел");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("шла");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("шло");
    expect(verb.getPastForm(["plural", "first", "neutral"])).toEqual("шли");
    expect(verb.getPastForm(["plural", "second"])).toEqual("шли");
    expect(verb.getPastForm(["plural", "third", "feminine"])).toEqual("шли");
  });

  it("should get correct forms of 'делать' in present", function() {
    var verb = RussianVerbs["do"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("делаю");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("делаешь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("делает");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("делаем");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("делаете");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("делают");
  });

  it("should get correct forms of 'делать' in past", function() {
    var verb = RussianVerbs["do"];
    expect(verb.getPastForm(["singular", "first"])).toEqual("делал");
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("делал");
    expect(verb.getPastForm(["singular", "first", "feminine"])).toEqual("делала");
    expect(verb.getPastForm(["singular", "first", "neutral"])).toEqual("делало");
    expect(verb.getPastForm(["singular", "second"])).toEqual("делал");
    expect(verb.getPastForm(["singular", "second", "masculine"])).toEqual("делал");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("делала");
    expect(verb.getPastForm(["singular", "second", "neutral"])).toEqual("делало");
    expect(verb.getPastForm(["singular", "third"])).toEqual("делал");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("делал");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("делала");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("делало");
    expect(verb.getPastForm(["plural", "first", "neutral"])).toEqual("делали");
    expect(verb.getPastForm(["plural", "second"])).toEqual("делали");
    expect(verb.getPastForm(["plural", "third", "feminine"])).toEqual("делали");
  });

  it("should get correct forms of 'любить' in present", function() {
    var verb = RussianVerbs["love"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("люблю");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("любишь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("любит");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("любим");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("любите");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("любят");
  });

  it("should get correct forms of 'спать' in present", function() {
    var verb = RussianVerbs["sleep"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("сплю");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("спишь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("спит");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("спим");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("спите");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("спят");
  });

  it("should get correct forms of 'видеть' in present", function() {
    var verb = RussianVerbs["see"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("вижу");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("видишь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("видит");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("видим");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("видите");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("видят");
  });

  it("should get correct forms of 'смотреть' in present", function() {
    var verb = RussianVerbs["look"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("смотрю");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("смотришь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("смотрит");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("смотрим");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("смотрите");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("смотрят");
  });

  it("should get correct forms of 'хотеть' in present", function() {
    var verb = RussianVerbs["want"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("хочу");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("хочешь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("хочет");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("хотим");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("хотите");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("хотят");
  });

  it("should get correct forms of 'хотеть' in past", function() {
    var verb = RussianVerbs["want"];
    expect(verb.getPastForm(["singular", "first"])).toEqual("хотел");
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("хотел");
    expect(verb.getPastForm(["singular", "first", "feminine"])).toEqual("хотела");
    expect(verb.getPastForm(["singular", "first", "neutral"])).toEqual("хотело");
    expect(verb.getPastForm(["singular", "second"])).toEqual("хотел");
    expect(verb.getPastForm(["singular", "second", "masculine"])).toEqual("хотел");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("хотела");
    expect(verb.getPastForm(["singular", "second", "neutral"])).toEqual("хотело");
    expect(verb.getPastForm(["singular", "third"])).toEqual("хотел");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("хотел");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("хотела");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("хотело");
    expect(verb.getPastForm(["plural", "first", "neutral"])).toEqual("хотели");
    expect(verb.getPastForm(["plural", "second"])).toEqual("хотели");
    expect(verb.getPastForm(["plural", "third", "masculine"])).toEqual("хотели");
  });

  it("should get correct forms of 'целовать' in present", function() {
    var verb = RussianVerbs["kiss"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("целую");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("целуешь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("целует");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("целуем");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("целуете");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("целуют");
  });

  it("should get correct forms of 'целовать' in past", function() {
    var verb = RussianVerbs["kiss"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("целовал");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("целовала");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("целовал");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("целовала");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("целовало");
    expect(verb.getPastForm(["plural", "first"])).toEqual("целовали");
    expect(verb.getPastForm(["plural", "second"])).toEqual("целовали");
    expect(verb.getPastForm(["plural", "third"])).toEqual("целовали");
  });

  it("should get correct forms of 'становиться' in present", function() {
    var verb = RussianVerbs["become"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("становлюсь");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("становишься");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("становится");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("становимся");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("становитеся");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("становятся");
  });

  it("should get correct forms of 'становиться' in past", function() {
    var verb = RussianVerbs["become"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("становился");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("становилась");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("становился");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("становилась");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("становилось");
    expect(verb.getPastForm(["plural", "first"])).toEqual("становились");
    expect(verb.getPastForm(["plural", "second"])).toEqual("становились");
    expect(verb.getPastForm(["plural", "third"])).toEqual("становились");
  });

  it("should get correct forms of 'приносить' in present", function() {
    var verb = RussianVerbs["bring"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("приношу");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("приносишь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("приносит");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("приносим");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("приносите");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("приносят");
  });

  it("should get correct forms of 'приносить' in past", function() {
    var verb = RussianVerbs["bring"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("приносил");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("приносила");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("приносил");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("приносила");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("приносило");
    expect(verb.getPastForm(["plural", "first"])).toEqual("приносили");
    expect(verb.getPastForm(["plural", "second"])).toEqual("приносили");
    expect(verb.getPastForm(["plural", "third"])).toEqual("приносили");
  });

  it("should get correct forms of 'приходить' in present", function() {
    var verb = RussianVerbs["come"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("прихожу");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("приходишь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("приходит");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("приходим");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("приходите");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("приходят");
  });

  it("should get correct forms of 'приходить' in past", function() {
    var verb = RussianVerbs["come"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("приходил");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("приходила");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("приходил");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("приходила");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("приходило");
    expect(verb.getPastForm(["plural", "first"])).toEqual("приходили");
    expect(verb.getPastForm(["plural", "second"])).toEqual("приходили");
    expect(verb.getPastForm(["plural", "third"])).toEqual("приходили");
  });

  it("should get correct forms of 'иметь' in present", function() {
    var verb = RussianVerbs["have"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("имею");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("имеешь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("имеет");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("имеем");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("имеете");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("имеют");
  });

  it("should get correct forms of 'иметь' in past", function() {
    var verb = RussianVerbs["have"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("имел");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("имела");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("имел");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("имела");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("имело");
    expect(verb.getPastForm(["plural", "second"])).toEqual("имели");
  });

  it("should get correct forms of 'хранить' in present", function() {
    var verb = RussianVerbs["keep"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("храню");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("хранишь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("хранит");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("храним");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("храните");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("хранят");
  });

  it("should get correct forms of 'хранить' in past", function() {
    var verb = RussianVerbs["keep"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("хранил");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("хранила");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("хранил");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("хранила");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("хранило");
    expect(verb.getPastForm(["plural", "second"])).toEqual("хранили");
  });

  it("should get correct forms of 'держать' in present", function() {
    var verb = RussianVerbs["hold"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("держу");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("держишь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("держит");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("держим");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("держите");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("держат");
  });

  it("should get correct forms of 'держать' in past", function() {
    var verb = RussianVerbs["hold"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("держал");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("держала");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("держал");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("держала");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("держало");
    expect(verb.getPastForm(["plural", "second"])).toEqual("держали");
  });

  it("should get correct forms of 'брать' in present", function() {
    var verb = RussianVerbs["take"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("беру");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("берешь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("берет");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("берем");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("берете");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("берут");
  });

  it("should get correct forms of 'брать' in past", function() {
    var verb = RussianVerbs["take"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("брал");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("брала");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("брал");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("брала");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("брало");
    expect(verb.getPastForm(["plural", "second"])).toEqual("брали");
  });

  it("should get correct forms of 'давать' in present", function() {
    var verb = RussianVerbs["give"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("даю");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("даешь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("дает");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("даем");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("даете");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("дают");
  });

  it("should get correct forms of 'давать' in past", function() {
    var verb = RussianVerbs["give"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("давал");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("давала");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("давал");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("давала");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("давало");
    expect(verb.getPastForm(["plural", "second"])).toEqual("давали");
  });

  it("should get correct forms of 'оставлять' in present", function() {
    var verb = RussianVerbs["leave"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("оставляю");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("оставляешь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("оставляет");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("оставляем");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("оставляете");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("оставляют");
  });

  it("should get correct forms of 'оставлять' in past", function() {
    var verb = RussianVerbs["leave"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("оставлял");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("оставляла");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("оставлял");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("оставляла");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("оставляло");
    expect(verb.getPastForm(["plural", "second"])).toEqual("оставляли");
  });

  it("should get correct forms of 'говорить' in present", function() {
    var verb = RussianVerbs["speak"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("говорю");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("говоришь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("говорит");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("говорим");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("говорите");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("говорят");
  });

  it("should get correct forms of 'говорить' in past", function() {
    var verb = RussianVerbs["speak"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("говорил");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("говорила");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("говорил");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("говорила");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("говорило");
    expect(verb.getPastForm(["plural", "second"])).toEqual("говорили");
  });

  it("should get correct forms of 'платить' in present", function() {
    var verb = RussianVerbs["pay"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("плачу");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("платишь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("платит");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("платим");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("платите");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("платят");
  });

  it("should get correct forms of 'платить' in past", function() {
    var verb = RussianVerbs["pay"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("платил");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("платила");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("платил");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("платила");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("платило");
    expect(verb.getPastForm(["plural", "second"])).toEqual("платили");
  });

  it("should get correct forms of 'терять' in present", function() {
    var verb = RussianVerbs["lose"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("теряю");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("теряешь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("теряет");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("теряем");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("теряете");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("теряют");
  });

  it("should get correct forms of 'терять' in past", function() {
    var verb = RussianVerbs["lose"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("терял");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("теряла");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("терял");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("теряла");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("теряло");
    expect(verb.getPastForm(["plural", "second"])).toEqual("теряли");
  });

  it("should get correct forms of 'резать' in present", function() {
    var verb = RussianVerbs["cut"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("режу");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("режешь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("режет");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("режем");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("режете");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("режут");
  });

  it("should get correct forms of 'резать' in past", function() {
    var verb = RussianVerbs["cut"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("резал");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("резала");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("резал");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("резала");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("резало");
    expect(verb.getPastForm(["plural", "second"])).toEqual("резали");
  });

  it("should get correct forms of 'слышать' in present", function() {
    var verb = RussianVerbs["hear"];
    expect(verb.getPresentForm(["singular", "first"])).toEqual("слышу");
    expect(verb.getPresentForm(["singular", "second"])).toEqual("слышишь");
    expect(verb.getPresentForm(["singular", "third"])).toEqual("слышит");
    expect(verb.getPresentForm(["plural", "first"])).toEqual("слышим");
    expect(verb.getPresentForm(["plural", "second"])).toEqual("слышите");
    expect(verb.getPresentForm(["plural", "third"])).toEqual("слышат");
  });

  it("should get correct forms of 'слышать' in past", function() {
    var verb = RussianVerbs["hear"];
    expect(verb.getPastForm(["singular", "first", "masculine"])).toEqual("слышал");
    expect(verb.getPastForm(["singular", "second", "feminine"])).toEqual("слышала");
    expect(verb.getPastForm(["singular", "third", "masculine"])).toEqual("слышал");
    expect(verb.getPastForm(["singular", "third", "feminine"])).toEqual("слышала");
    expect(verb.getPastForm(["singular", "third", "neutral"])).toEqual("слышало");
    expect(verb.getPastForm(["plural", "second"])).toEqual("слышали");
  });

  it("should conjugate 'work' in affirmative/present correctly", function() {
    var conj = new Conjugator(EnglishVerbs["work"]);
    expect(conj.getSentence(["affirmative", "present"], ["singular", "first"]))
      .toEqual("I work");
    expect(conj.getSentence(["affirmative", "present"], ["singular", "second"]))
      .toEqual("you work");
    expect(conj.getSentence(["affirmative", "present"], ["singular", "third", "masculine"]))
      .toEqual("he works");
    expect(conj.getSentence(["affirmative", "present"], ["singular", "third", "feminine"]))
      .toEqual("she works");
    expect(conj.getSentence(["affirmative", "present"], ["singular", "third", "neutral"]))
      .toEqual("it works");
    expect(conj.getSentence(["affirmative", "present"], ["plural", "first"]))
      .toEqual("we work");
    expect(conj.getSentence(["affirmative", "present"], ["plural", "second"]))
      .toEqual("you work");
    expect(conj.getSentence(["affirmative", "present"], ["plural", "third"]))
      .toEqual("they work");
  });

  it("should conjugate 'work' in affirmative/past correctly", function() {
    var conj = new Conjugator(EnglishVerbs["work"]);
    expect(conj.getSentence(["affirmative", "past"], ["singular", "first"]))
      .toEqual("I worked");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "second"]))
      .toEqual("you worked");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "third", "masculine"]))
      .toEqual("he worked");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "third", "feminine"]))
      .toEqual("she worked");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "third", "neutral"]))
      .toEqual("it worked");
    expect(conj.getSentence(["affirmative", "past"], ["plural", "first"]))
      .toEqual("we worked");
    expect(conj.getSentence(["affirmative", "past"], ["plural", "second"]))
      .toEqual("you worked");
    expect(conj.getSentence(["affirmative", "past"], ["plural", "third"]))
      .toEqual("they worked");
  });

  it("should conjugate 'work' in affirmative/future correctly", function() {
    var conj = new Conjugator(EnglishVerbs["work"]);
    expect(conj.getSentence(["affirmative", "future"], ["singular", "first"]))
      .toEqual("I will work");
    expect(conj.getSentence(["affirmative", "future"], ["singular", "second"]))
      .toEqual("you will work");
    expect(conj.getSentence(["affirmative", "future"], ["singular", "third", "masculine"]))
      .toEqual("he will work");
    expect(conj.getSentence(["affirmative", "future"], ["singular", "third", "feminine"]))
      .toEqual("she will work");
    expect(conj.getSentence(["affirmative", "future"], ["singular", "third", "neutral"]))
      .toEqual("it will work");
    expect(conj.getSentence(["affirmative", "future"], ["plural", "first"]))
      .toEqual("we will work");
    expect(conj.getSentence(["affirmative", "future"], ["plural", "second"]))
      .toEqual("you will work");
    expect(conj.getSentence(["affirmative", "future"], ["plural", "third"]))
      .toEqual("they will work");
  });

  it("should conjugate 'work' in negative/present correctly", function() {
    var conj = new Conjugator(EnglishVerbs["work"]);
    expect(conj.getSentence(["negative", "present"], ["singular", "first"]))
      .toEqual("I do not work");
    expect(conj.getSentence(["negative", "present"], ["singular", "second"]))
      .toEqual("you do not work");
    expect(conj.getSentence(["negative", "present"], ["singular", "third", "masculine"]))
      .toEqual("he does not work");
    expect(conj.getSentence(["negative", "present"], ["singular", "third", "feminine"]))
      .toEqual("she does not work");
    expect(conj.getSentence(["negative", "present"], ["singular", "third", "neutral"]))
      .toEqual("it does not work");
    expect(conj.getSentence(["negative", "present"], ["plural", "first"]))
      .toEqual("we do not work");
    expect(conj.getSentence(["negative", "present"], ["plural", "second"]))
      .toEqual("you do not work");
    expect(conj.getSentence(["negative", "present"], ["plural", "third"]))
      .toEqual("they do not work");
  });

  it("should conjugate 'work' in negative/present/short correctly", function() {
    var conj = new Conjugator(EnglishVerbs["work"]);
    expect(conj.getSentence(["negative", "present"], ["singular", "first"], ["short"]))
      .toEqual("I don't work");
    expect(conj.getSentence(["negative", "present"], ["singular", "second"], ["short"]))
      .toEqual("you don't work");
    expect(conj.getSentence(["negative", "present"], ["singular", "third", "masculine"], ["short"]))
      .toEqual("he doesn't work");
    expect(conj.getSentence(["negative", "present"], ["singular", "third", "feminine"], ["short"]))
      .toEqual("she doesn't work");
    expect(conj.getSentence(["negative", "present"], ["singular", "third", "neutral"], ["short"]))
      .toEqual("it doesn't work");
    expect(conj.getSentence(["negative", "present"], ["plural", "first"], ["short"]))
      .toEqual("we don't work");
    expect(conj.getSentence(["negative", "present"], ["plural", "second"], ["short"]))
      .toEqual("you don't work");
    expect(conj.getSentence(["negative", "present"], ["plural", "third"], ["short"]))
      .toEqual("they don't work");
  });

  it("should conjugate 'work' in negative/past correctly", function() {
    var conj = new Conjugator(EnglishVerbs["work"]);
    expect(conj.getSentence(["negative", "past"], ["singular", "first"]))
      .toEqual("I did not work");
    expect(conj.getSentence(["negative", "past"], ["singular", "second"]))
      .toEqual("you did not work");
    expect(conj.getSentence(["negative", "past"], ["singular", "third", "masculine"]))
      .toEqual("he did not work");
    expect(conj.getSentence(["negative", "past"], ["singular", "third", "feminine"]))
      .toEqual("she did not work");
    expect(conj.getSentence(["negative", "past"], ["singular", "third", "neutral"]))
      .toEqual("it did not work");
    expect(conj.getSentence(["negative", "past"], ["plural", "first"]))
      .toEqual("we did not work");
    expect(conj.getSentence(["negative", "past"], ["plural", "second"]))
      .toEqual("you did not work");
    expect(conj.getSentence(["negative", "past"], ["plural", "third"]))
      .toEqual("they did not work");
  });

  it("should conjugate 'work' in negative/past/short correctly", function() {
    var conj = new Conjugator(EnglishVerbs["work"]);
    expect(conj.getSentence(["negative", "past"], ["singular", "first"], ["short"]))
      .toEqual("I didn't work");
    expect(conj.getSentence(["negative", "past"], ["singular", "second"], ["short"]))
      .toEqual("you didn't work");
    expect(conj.getSentence(["negative", "past"], ["singular", "third", "masculine"], ["short"]))
      .toEqual("he didn't work");
    expect(conj.getSentence(["negative", "past"], ["singular", "third", "feminine"], ["short"]))
      .toEqual("she didn't work");
    expect(conj.getSentence(["negative", "past"], ["singular", "third", "neutral"], ["short"]))
      .toEqual("it didn't work");
    expect(conj.getSentence(["negative", "past"], ["plural", "first"], ["short"]))
      .toEqual("we didn't work");
    expect(conj.getSentence(["negative", "past"], ["plural", "second"], ["short"]))
      .toEqual("you didn't work");
    expect(conj.getSentence(["negative", "past"], ["plural", "third"], ["short"]))
      .toEqual("they didn't work");
  });

  it("should conjugate 'work' in negative/future correctly", function() {
    var conj = new Conjugator(EnglishVerbs["work"]);
    expect(conj.getSentence(["negative", "future"], ["singular", "first"]))
      .toEqual("I will not work");
    expect(conj.getSentence(["negative", "future"], ["singular", "second"]))
      .toEqual("you will not work");
    expect(conj.getSentence(["negative", "future"], ["singular", "third", "masculine"]))
      .toEqual("he will not work");
    expect(conj.getSentence(["negative", "future"], ["singular", "third", "feminine"]))
      .toEqual("she will not work");
    expect(conj.getSentence(["negative", "future"], ["singular", "third", "neutral"]))
      .toEqual("it will not work");
    expect(conj.getSentence(["negative", "future"], ["plural", "first"]))
      .toEqual("we will not work");
    expect(conj.getSentence(["negative", "future"], ["plural", "second"]))
      .toEqual("you will not work");
    expect(conj.getSentence(["negative", "future"], ["plural", "third"]))
      .toEqual("they will not work");
  });

  it("should conjugate 'work' in negative/future/short correctly", function() {
    var conj = new Conjugator(EnglishVerbs["work"]);
    expect(conj.getSentence(["negative", "future"], ["singular", "first"], ["short"]))
      .toEqual("I won't work");
    expect(conj.getSentence(["negative", "future"], ["singular", "second"], ["short"]))
      .toEqual("you won't work");
    expect(conj.getSentence(["negative", "future"], ["singular", "third", "masculine"], ["short"]))
      .toEqual("he won't work");
    expect(conj.getSentence(["negative", "future"], ["singular", "third", "feminine"], ["short"]))
      .toEqual("she won't work");
    expect(conj.getSentence(["negative", "future"], ["singular", "third", "neutral"], ["short"]))
      .toEqual("it won't work");
    expect(conj.getSentence(["negative", "future"], ["plural", "first"], ["short"]))
      .toEqual("we won't work");
    expect(conj.getSentence(["negative", "future"], ["plural", "second"], ["short"]))
      .toEqual("you won't work");
    expect(conj.getSentence(["negative", "future"], ["plural", "third"], ["short"]))
      .toEqual("they won't work");
  });

  it("should conjugate 'see' in question/present correctly", function() {
    var conj = new Conjugator(EnglishVerbs["see"]);
    expect(conj.getSentence(["question", "present"], ["singular", "first"]))
      .toEqual("do I see?");
    expect(conj.getSentence(["question", "present"], ["singular", "second"]))
      .toEqual("do you see?");
    expect(conj.getSentence(["question", "present"], ["singular", "third"]))
      .toEqual("does he see?");
    expect(conj.getSentence(["question", "present"], ["singular", "third", "masculine"]))
      .toEqual("does he see?");
    expect(conj.getSentence(["question", "present"], ["singular", "third", "feminine"]))
      .toEqual("does she see?");
    expect(conj.getSentence(["question", "present"], ["singular", "third", "neutral"]))
      .toEqual("does it see?");
    expect(conj.getSentence(["question", "present"], ["plural", "first"]))
      .toEqual("do we see?");
    expect(conj.getSentence(["question", "present"], ["plural", "second"]))
      .toEqual("do you see?");
    expect(conj.getSentence(["question", "present"], ["plural", "third"]))
      .toEqual("do they see?");
  });

  it("should conjugate 'see' in question/past correctly", function() {
    var conj = new Conjugator(EnglishVerbs["see"]);
    expect(conj.getSentence(["question", "past"], ["singular", "first"]))
      .toEqual("did I see?");
    expect(conj.getSentence(["question", "past"], ["singular", "second"]))
      .toEqual("did you see?");
    expect(conj.getSentence(["question", "past"], ["singular", "third"]))
      .toEqual("did he see?");
    expect(conj.getSentence(["question", "past"], ["singular", "third", "masculine"]))
      .toEqual("did he see?");
    expect(conj.getSentence(["question", "past"], ["singular", "third", "feminine"]))
      .toEqual("did she see?");
    expect(conj.getSentence(["question", "past"], ["singular", "third", "neutral"]))
      .toEqual("did it see?");
    expect(conj.getSentence(["question", "past"], ["plural", "first"]))
      .toEqual("did we see?");
    expect(conj.getSentence(["question", "past"], ["plural", "second"]))
      .toEqual("did you see?");
    expect(conj.getSentence(["question", "past"], ["plural", "third"]))
      .toEqual("did they see?");
  });

  it("should conjugate 'love' in question/future correctly", function() {
    var conj = new Conjugator(EnglishVerbs["love"]);
    expect(conj.getSentence(["question", "future"], ["singular", "first"]))
      .toEqual("will I love?");
    expect(conj.getSentence(["question", "future"], ["singular", "second"]))
      .toEqual("will you love?");
    expect(conj.getSentence(["question", "future"], ["singular", "third"]))
      .toEqual("will he love?");
    expect(conj.getSentence(["question", "future"], ["singular", "third", "masculine"]))
      .toEqual("will he love?");
    expect(conj.getSentence(["question", "future"], ["singular", "third", "feminine"]))
      .toEqual("will she love?");
    expect(conj.getSentence(["question", "future"], ["singular", "third", "neutral"]))
      .toEqual("will it love?");
    expect(conj.getSentence(["question", "future"], ["plural", "first"]))
      .toEqual("will we love?");
    expect(conj.getSentence(["question", "future"], ["plural", "second"]))
      .toEqual("will you love?");
    expect(conj.getSentence(["question", "future"], ["plural", "third"]))
      .toEqual("will they love?");
  });

  it("should conjugate 'спать' in affirmative/present correctly", function() {
    var conj = new Conjugator(RussianVerbs["sleep"]);
    expect(conj.getSentence(["affirmative", "present"], ["singular", "first"]))
      .toEqual("я сплю");
    expect(conj.getSentence(["affirmative", "present"], ["singular", "second"]))
      .toEqual("ты спишь");
    expect(conj.getSentence(["affirmative", "present"], ["singular", "third"]))
      .toEqual("он спит");
    expect(conj.getSentence(["affirmative", "present"], ["singular", "third", "masculine"]))
      .toEqual("он спит");
    expect(conj.getSentence(["affirmative", "present"], ["singular", "third", "feminine"]))
      .toEqual("она спит");
    expect(conj.getSentence(["affirmative", "present"], ["singular", "third", "neutral"]))
      .toEqual("оно спит");
    expect(conj.getSentence(["affirmative", "present"], ["plural", "first"]))
      .toEqual("мы спим");
    expect(conj.getSentence(["affirmative", "present"], ["plural", "second"]))
      .toEqual("вы спите");
    expect(conj.getSentence(["affirmative", "present"], ["plural", "third"]))
      .toEqual("они спят");
    expect(conj.getSentence(["affirmative", "present"], ["plural", "third", "feminine"]))
      .toEqual("они спят");
  });

  it("should conjugate 'спать' in affirmative/past correctly", function() {
    var conj = new Conjugator(RussianVerbs["sleep"]);
    expect(conj.getSentence(["affirmative", "past"], ["singular", "first"]))
      .toEqual("я спал");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "first", "masculine"]))
      .toEqual("я спал");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "first", "feminine"]))
      .toEqual("я спала");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "first", "neutral"]))
      .toEqual("я спало");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "second"]))
      .toEqual("ты спал");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "second", "masculine"]))
      .toEqual("ты спал");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "second", "feminine"]))
      .toEqual("ты спала");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "second", "neutral"]))
      .toEqual("ты спало");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "third"]))
      .toEqual("он спал");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "third", "masculine"]))
      .toEqual("он спал");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "third", "feminine"]))
      .toEqual("она спала");
    expect(conj.getSentence(["affirmative", "past"], ["singular", "third", "neutral"]))
      .toEqual("оно спало");
    expect(conj.getSentence(["affirmative", "past"], ["plural", "first"]))
      .toEqual("мы спали");
    expect(conj.getSentence(["affirmative", "past"], ["plural", "first", "neutral"]))
      .toEqual("мы спали");
    expect(conj.getSentence(["affirmative", "past"], ["plural", "second"]))
      .toEqual("вы спали");
    expect(conj.getSentence(["affirmative", "past"], ["plural", "third"]))
      .toEqual("они спали");
    expect(conj.getSentence(["affirmative", "past"], ["plural", "third", "feminine"]))
      .toEqual("они спали");
  });

  it("should conjugate 'спать' in affirmative/future correctly", function() {
    var conj = new Conjugator(RussianVerbs["sleep"]);
    expect(conj.getSentence(["affirmative", "future"], ["singular", "first"]))
      .toEqual("я буду спать");
    expect(conj.getSentence(["affirmative", "future"], ["singular", "second"]))
      .toEqual("ты будешь спать");
    expect(conj.getSentence(["affirmative", "future"], ["singular", "third"]))
      .toEqual("он будет спать");
    expect(conj.getSentence(["affirmative", "future"], ["singular", "third", "masculine"]))
      .toEqual("он будет спать");
    expect(conj.getSentence(["affirmative", "future"], ["singular", "third", "feminine"]))
      .toEqual("она будет спать");
    expect(conj.getSentence(["affirmative", "future"], ["singular", "third", "neutral"]))
      .toEqual("оно будет спать");
    expect(conj.getSentence(["affirmative", "future"], ["plural", "first"]))
      .toEqual("мы будем спать");
    expect(conj.getSentence(["affirmative", "future"], ["plural", "first", "feminine"]))
      .toEqual("мы будем спать");
    expect(conj.getSentence(["affirmative", "future"], ["plural", "second"]))
      .toEqual("вы будете спать");
    expect(conj.getSentence(["affirmative", "future"], ["plural", "third"]))
      .toEqual("они будут спать");
  });

  it("should conjugate 'хотеть' in negative/present correctly", function() {
    var conj = new Conjugator(RussianVerbs["want"]);
    expect(conj.getSentence(["negative", "present"], ["singular", "first"]))
      .toEqual("я не хочу");
    expect(conj.getSentence(["negative", "present"], ["singular", "second"]))
      .toEqual("ты не хочешь");
    expect(conj.getSentence(["negative", "present"], ["singular", "third"]))
      .toEqual("он не хочет");
    expect(conj.getSentence(["negative", "present"], ["singular", "third", "masculine"]))
      .toEqual("он не хочет");
    expect(conj.getSentence(["negative", "present"], ["singular", "third", "feminine"]))
      .toEqual("она не хочет");
    expect(conj.getSentence(["negative", "present"], ["singular", "third", "neutral"]))
      .toEqual("оно не хочет");
    expect(conj.getSentence(["negative", "present"], ["plural", "first"]))
      .toEqual("мы не хотим");
    expect(conj.getSentence(["negative", "present"], ["plural", "second"]))
      .toEqual("вы не хотите");
    expect(conj.getSentence(["negative", "present"], ["plural", "third"]))
      .toEqual("они не хотят");
    expect(conj.getSentence(["negative", "present"], ["plural", "third", "feminine"]))
      .toEqual("они не хотят");
  });

  it("should conjugate 'хотеть' in negative/past correctly", function() {
    var conj = new Conjugator(RussianVerbs["want"]);
    expect(conj.getSentence(["negative", "past"], ["singular", "first"]))
      .toEqual("я не хотел");
    expect(conj.getSentence(["negative", "past"], ["singular", "first", "masculine"]))
      .toEqual("я не хотел");
    expect(conj.getSentence(["negative", "past"], ["singular", "first", "feminine"]))
      .toEqual("я не хотела");
    expect(conj.getSentence(["negative", "past"], ["singular", "first", "neutral"]))
      .toEqual("я не хотело");
    expect(conj.getSentence(["negative", "past"], ["singular", "second"]))
      .toEqual("ты не хотел");
    expect(conj.getSentence(["negative", "past"], ["singular", "second", "masculine"]))
      .toEqual("ты не хотел");
    expect(conj.getSentence(["negative", "past"], ["singular", "second", "feminine"]))
      .toEqual("ты не хотела");
    expect(conj.getSentence(["negative", "past"], ["singular", "second", "neutral"]))
      .toEqual("ты не хотело");
    expect(conj.getSentence(["negative", "past"], ["singular", "third"]))
      .toEqual("он не хотел");
    expect(conj.getSentence(["negative", "past"], ["singular", "third", "masculine"]))
      .toEqual("он не хотел");
    expect(conj.getSentence(["negative", "past"], ["singular", "third", "feminine"]))
      .toEqual("она не хотела");
    expect(conj.getSentence(["negative", "past"], ["singular", "third", "neutral"]))
      .toEqual("оно не хотело");
    expect(conj.getSentence(["negative", "past"], ["plural", "first", "neutral"]))
      .toEqual("мы не хотели");
    expect(conj.getSentence(["negative", "past"], ["plural", "second"]))
      .toEqual("вы не хотели");
    expect(conj.getSentence(["negative", "past"], ["plural", "third"]))
      .toEqual("они не хотели");
  });

  it("should conjugate 'хотеть' in negative/future correctly", function() {
    var conj = new Conjugator(RussianVerbs["want"]);
    expect(conj.getSentence(["negative", "future"], ["singular", "first"]))
      .toEqual("я не буду хотеть");
    expect(conj.getSentence(["negative", "future"], ["singular", "second"]))
      .toEqual("ты не будешь хотеть");
    expect(conj.getSentence(["negative", "future"], ["singular", "third"]))
      .toEqual("он не будет хотеть");
    expect(conj.getSentence(["negative", "future"], ["singular", "third", "masculine"]))
      .toEqual("он не будет хотеть");
    expect(conj.getSentence(["negative", "future"], ["singular", "third", "feminine"]))
      .toEqual("она не будет хотеть");
    expect(conj.getSentence(["negative", "future"], ["singular", "third", "neutral"]))
      .toEqual("оно не будет хотеть");
    expect(conj.getSentence(["negative", "future"], ["plural", "first"]))
      .toEqual("мы не будем хотеть");
    expect(conj.getSentence(["negative", "future"], ["plural", "first", "feminine"]))
      .toEqual("мы не будем хотеть");
    expect(conj.getSentence(["negative", "future"], ["plural", "second"]))
      .toEqual("вы не будете хотеть");
    expect(conj.getSentence(["negative", "future"], ["plural", "third"]))
      .toEqual("они не будут хотеть");
  });

  it("should conjugate 'брить' in question/present correctly", function() {
    var conj = new Conjugator(RussianVerbs["shave"]);
    expect(conj.getSentence(["question", "present"], ["singular", "first"]))
      .toEqual("брею ли я?");
    expect(conj.getSentence(["question", "present"], ["singular", "second"]))
      .toEqual("бреешь ли ты?");
    expect(conj.getSentence(["question", "present"], ["singular", "second", "neutral"]))
      .toEqual("бреешь ли ты?");
    expect(conj.getSentence(["question", "present"], ["singular", "third"]))
      .toEqual("бреет ли он?");
    expect(conj.getSentence(["question", "present"], ["singular", "third", "masculine"]))
      .toEqual("бреет ли он?");
    expect(conj.getSentence(["question", "present"], ["singular", "third", "feminine"]))
      .toEqual("бреет ли она?");
    expect(conj.getSentence(["question", "present"], ["singular", "third", "neutral"]))
      .toEqual("бреет ли оно?");
    expect(conj.getSentence(["question", "present"], ["plural", "first"]))
      .toEqual("бреем ли мы?");
    expect(conj.getSentence(["question", "present"], ["plural", "second"]))
      .toEqual("бреете ли вы?");
    expect(conj.getSentence(["question", "present"], ["plural", "third"]))
      .toEqual("бреют ли они?");
    expect(conj.getSentence(["question", "present"], ["plural", "third", "masculine"]))
      .toEqual("бреют ли они?");
  });

  it("should conjugate 'брить' in question/past correctly", function() {
    var conj = new Conjugator(RussianVerbs["shave"]);
    expect(conj.getSentence(["question", "past"], ["singular", "first"]))
      .toEqual("брил ли я?");
    expect(conj.getSentence(["question", "past"], ["singular", "first", "masculine"]))
      .toEqual("брил ли я?");
    expect(conj.getSentence(["question", "past"], ["singular", "first", "feminine"]))
      .toEqual("брила ли я?");
    expect(conj.getSentence(["question", "past"], ["singular", "first", "neutral"]))
      .toEqual("брило ли я?");
    expect(conj.getSentence(["question", "past"], ["singular", "second"]))
      .toEqual("брил ли ты?");
    expect(conj.getSentence(["question", "past"], ["singular", "second", "masculine"]))
      .toEqual("брил ли ты?");
    expect(conj.getSentence(["question", "past"], ["singular", "second", "feminine"]))
      .toEqual("брила ли ты?");
    expect(conj.getSentence(["question", "past"], ["singular", "second", "neutral"]))
      .toEqual("брило ли ты?");
    expect(conj.getSentence(["question", "past"], ["singular", "third"]))
      .toEqual("брил ли он?");
    expect(conj.getSentence(["question", "past"], ["singular", "third", "masculine"]))
      .toEqual("брил ли он?");
    expect(conj.getSentence(["question", "past"], ["singular", "third", "feminine"]))
      .toEqual("брила ли она?");
    expect(conj.getSentence(["question", "past"], ["singular", "third", "neutral"]))
      .toEqual("брило ли оно?");
    expect(conj.getSentence(["question", "past"], ["plural", "first"]))
      .toEqual("брили ли мы?");
    expect(conj.getSentence(["question", "past"], ["plural", "second", "feminine"]))
      .toEqual("брили ли вы?");
    expect(conj.getSentence(["question", "past"], ["plural", "third"]))
      .toEqual("брили ли они?");
  });

  it("should conjugate 'спать' in question/past correctly", function() {
    var conj = new Conjugator(RussianVerbs["sleep"]);
    expect(conj.getSentence(["question", "past"], ["singular", "first"]))
      .toEqual("спал ли я?");
    expect(conj.getSentence(["question", "past"], ["singular", "first", "masculine"]))
      .toEqual("спал ли я?");
    expect(conj.getSentence(["question", "past"], ["singular", "first", "feminine"]))
      .toEqual("спала ли я?");
    expect(conj.getSentence(["question", "past"], ["singular", "first", "neutral"]))
      .toEqual("спало ли я?");
    expect(conj.getSentence(["question", "past"], ["singular", "second"]))
      .toEqual("спал ли ты?");
    expect(conj.getSentence(["question", "past"], ["singular", "second", "masculine"]))
      .toEqual("спал ли ты?");
    expect(conj.getSentence(["question", "past"], ["singular", "second", "feminine"]))
      .toEqual("спала ли ты?");
    expect(conj.getSentence(["question", "past"], ["singular", "second", "neutral"]))
      .toEqual("спало ли ты?");
    expect(conj.getSentence(["question", "past"], ["singular", "third"]))
      .toEqual("спал ли он?");
    expect(conj.getSentence(["question", "past"], ["singular", "third", "masculine"]))
      .toEqual("спал ли он?");
    expect(conj.getSentence(["question", "past"], ["singular", "third", "feminine"]))
      .toEqual("спала ли она?");
    expect(conj.getSentence(["question", "past"], ["singular", "third", "neutral"]))
      .toEqual("спало ли оно?");
    expect(conj.getSentence(["question", "past"], ["plural", "first"]))
      .toEqual("спали ли мы?");
    expect(conj.getSentence(["question", "past"], ["plural", "second", "feminine"]))
      .toEqual("спали ли вы?");
    expect(conj.getSentence(["question", "past"], ["plural", "third"]))
      .toEqual("спали ли они?");
  });

  it("should conjugate 'брить' in question/future correctly", function() {
    var conj = new Conjugator(RussianVerbs["shave"]);
    expect(conj.getSentence(["question", "future"], ["singular", "first"]))
      .toEqual("буду ли я брить?");
    expect(conj.getSentence(["question", "future"], ["singular", "second"]))
      .toEqual("будешь ли ты брить?");
    expect(conj.getSentence(["question", "future"], ["singular", "third"]))
      .toEqual("будет ли он брить?");
    expect(conj.getSentence(["question", "future"], ["singular", "third", "masculine"]))
      .toEqual("будет ли он брить?");
    expect(conj.getSentence(["question", "future"], ["singular", "third", "feminine"]))
      .toEqual("будет ли она брить?");
    expect(conj.getSentence(["question", "future"], ["singular", "third", "neutral"]))
      .toEqual("будет ли оно брить?");
    expect(conj.getSentence(["question", "future"], ["plural", "first"]))
      .toEqual("будем ли мы брить?");
    expect(conj.getSentence(["question", "future"], ["plural", "first", "neutral"]))
      .toEqual("будем ли мы брить?");
    expect(conj.getSentence(["question", "future"], ["plural", "second"]))
      .toEqual("будете ли вы брить?");
    expect(conj.getSentence(["question", "future"], ["plural", "third"]))
      .toEqual("будут ли они брить?");
  });

});
