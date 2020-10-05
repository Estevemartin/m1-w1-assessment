// Write a function that returns the product of 2 numbers
function product(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {return false;}else{return x*y;}
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {return true;}else{return false;}
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a>b){return a;}else{return b;}
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number"|| typeof c !== "number") {return false;}else{return Math.max(a,b,c);}
}
num = [1,2,3,4,5,77,8,9];
num2 =[1, 2, undefined, 44]
// console.log(sumArray(num));
// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (Array.isArray(numbers)===false || checkNanInArray(numbers)===false) {return false;}else{return numbers.reduce((a,b)=>a+b,0);}
}
// console.log(checkNanInArray(num))
// console.log("------")
// console.log(checkNanInArray(num2))
function checkNanInArray(arr){
  let result = true;
  arr.forEach(element=>{
    if(typeof element !== "number"){
      result = false;
    }
  });
  return result;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (Array.isArray(numbers)===false || numbers.length===0){return false;} else {return Math.max.apply(null,numbers);}
}
test_array=['abc', 1, null, undefined, 'ab', 'abcd'];
console.log(longestString(test_array));
// Return the longest string in an array
function longestString(strings) {
  if (Array.isArray(strings)===false || strings.length===0){return false;}
  let maxLength = 0;
  let wordMaxLenght="";
  strings.forEach((element)=>{
    if(element !== null && element !== undefined){
      if (maxLength<element.length){
        wordMaxLenght = element;
        maxLength = element.length;
      }
    }
  });
  return wordMaxLenght;
}
function checkNullInArray(arr){
  let result = true;
  arr.forEach(element=>{
    if(element === null){
      result = false;
    }
  });
  return result;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (Array.isArray(wordsArr)===false){return false;}
  if (wordsArr.includes(word)){return true;} else {return false;}
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (Array.isArray(wordsArr)===false){return false;}
  if (wordsArr.length === 0){return false;}
  let uniqueValues=[];
  wordsArr.forEach(element=>{
    if (countOccurrences(wordsArr,element)===1){
      uniqueValues.push(element);
    }
  });
  return uniqueValues[0];
}
function countOccurrences(arr,val){
  let counter =0;
  arr.forEach(element=>{
    if (element === val){
      counter++;
    }
  });
  return counter;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if (typeof personObj !== 'object' || Array.isArray(personObj)===true || personObj.lastName === undefined || personObj.firstName===undefined){return false;}
  return personObj.firstName + " " +personObj.lastName;
}


// var matriz_test = [[9, 1, 1331, 42], [3133, 13, 1], [931, 3131, 0]];
// console.log(maxTwoDimArray(matriz_test));
// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  if (Array.isArray(matrix)===false || matrix.length===0){return false;}
  var max=0;
  for (i=0;i<matrix.length;i++){
    for (j=0;j<matrix[0].length;j++){
      if (matrix[i][j]>max){
        max=matrix[i][j];
      }
    }
  }
  return max;
}
