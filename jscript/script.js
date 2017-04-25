var sentence=prompt("Enter a sentence:");
var firlast=function(sentence){
  return sentence.charAt(0)+sentence.slice(-1);
};
var choose=firlast(sentence);
alert(choose);

/*to reverse short string use this
var firlast=function(sentence){
  return sentence.slice(-1)+sentence.charAt(0);
};
alert(firlast(sentence));
*/

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
var reverse=reverseString(choose);
alert(reverse);
