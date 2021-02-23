const { lettersToMorseCode, morseCodeToLetters } = require("../src/script.js");

describe("lettersToMorseCode", function () {
  it("should change letters in a string to a Morse Code string", function () {
    expect(lettersToMorseCode("Hi there")).toBe(".... .. / - .... . .-. . ");
  });
});

describe("morseCodeToLetters", function () {
  it("should change letters in a string to a Morse Code string", function () {
    expect(morseCodeToLetters(".... .. / - .... . .-. .")).toBe("Hi there");
  });
});
