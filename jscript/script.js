var sentence=prompt("Enter a sentence:");
var firlast=function(sentence){
  return sentence.charAt(0)+sentence.slice(-1);
};
alert(firlast(sentence));
var firlast=function(sentence){
  return sentence.slice(-1)+sentence.charAt(0);
};
alert(firlast(sentence));
/*to reverse long string use this
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString('dwayne');
*/
