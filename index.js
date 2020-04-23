var num = 0;
function takeANumber() {
    
    num ++;
 
  return 'Order number '+ num
}

console.log(takeANumber())
console.log(takeANumber())
console.log(takeANumber())



function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
   return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
}



function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  var currentLine = 'The line is currently: ';
  for (var i = 0; i < katzDeliLine.length; i++) {// i =0
    var name = katzDeliLine[i]; // name = Ada
    var num = i + 1; // num = 1
    var str = num + '. ' + name; // 1. Ada
    if (i !== katzDeliLine.length -1 && i !== 0) {
      currentLine += ' ' + str + ',';
      } else if (i === 0) {
      currentLine += str + ','; // The line is currentlu:1. Ada,
      } else {
      currentLine += ' ' + str; // //The line is currently:  1.Ada
    }
  }
  return currentLine;
}
  
