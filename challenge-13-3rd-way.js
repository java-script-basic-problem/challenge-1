// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

// ans --------------------->

function getPositiveNumbersOfArr(ar){
    return ar.filter(el=> el>=0);
}

let array = [1,5,8,-4,-165,39,741,788,-556]
const onlyPositiveNumbers = getPositiveNumbersOfArr(array);
console.log(onlyPositiveNumbers)