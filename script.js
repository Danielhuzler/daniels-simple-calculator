// function cyclicRotation(number,k){
//   // console.log("inside number.length",number.length);
// let divisor = 1;
// let multiplier = 1;
// numberLength(number);
// let numLength=numberLength(number)
// for (i=0; i<numLength; i++) {
//   console.log("inside for");
//   if(i<k){
//     multiplier = 10*multiplier

//   }else 
//   divisor = 10*divisor
// }
// let quotient = parseInt(number/divisor);
// // console.log(quotient);
// let reminder = parseInt(number%divisor);
//  let rotationNumber = (reminder*multiplier)+quotient
//  return rotationNumber;
// }

// function numberLength(number){
//   let value= number.toString();
//   return value.length;
// }
// // function numberLength1(number){
// // let length=0;
// // while(number){
// //     length++;
// //     console.log("lenght inside",length)
// //     number= parseInt(number/10);
// //     console.log("number inside",number)
// // }
// //   console.log("length of number",length);
// //   return length;
// // }
// console.log(cyclicRotation(1234567890,2))



// problem solving testing codes for substring without using sub str ();  

function getAllSubstrings(str) {
  var i, j, result = [];

  for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {
          result.push(str.slice(i, j));
      }
  }
  return result;
}

var theString = 'daniel';
console.log(getAllSubstrings(theString));
