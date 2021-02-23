const { data } = require("./object");

function lettersToMorseCode(str) {
  let newStr = str.toLowerCase().split("");
  var lettersToCode = "";
  for (var i = 0; i < newStr.length; i++) {
    for (key in data) {
      if (newStr[i] == key) {
        lettersToCode += data[key] + " ";
      }
    }
  }
  var countCharOutput = lettersToCode.split(" ").length - 1;
  var countCharInput = str.length;
  var countSpace = (str.match(/\s/g) || []).length;
  var countSlash = (lettersToCode.match(/[/]/g) || []).length;
  console.assert(
    countCharOutput === countCharInput,
    "The output and input must have the same number of characters represented"
  );
  console.assert(
    countSpace === countSlash,
    "The number of spaces in the input are represented in the output"
  );
  return lettersToCode;
}
function morseCodeToLetters(str) {
  var codeToLetters = "";
  var strToArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strToArr.length; i++) {
    for (key in data) {
      if (strToArr[i] == data[key]) {
        codeToLetters += key;
      }
    }
  }
  var upperCase =
    codeToLetters.charAt(0).toUpperCase() + codeToLetters.slice(1);
  var countCharInput = strToArr.length;
  var countCharOutput = upperCase.length;
  var countSlash = (str.match(/[/]/g) || []).length;
  var countSpace = (upperCase.match(/\s/g) || []).length;
  console.assert(
    countCharInput === countCharOutput,
    "The output and input must have the same number of characters represented"
  );
  console.assert(
    countSlash === countSpace,
    "The number of spaces in the input are represented in the output"
  );
  return upperCase;
}
module.exports = { lettersToMorseCode, morseCodeToLetters };
