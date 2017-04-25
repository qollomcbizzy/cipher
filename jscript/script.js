var sentence=prompt("Enter a sentence:");
var firlast=function(sentence){
  return sentence.charAt(0)+sentence.slice(-1);
};
alert(firlast(sentence));
