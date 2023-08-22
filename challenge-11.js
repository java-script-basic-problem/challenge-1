// Coding challenge #10: Calculate the sum of numbers in an array of numbers

// ans--------------------------->

function sumArray(ar){
    let sum = 0;
    for(i=0; i<ar.length; i++){
        sum += arr[i];
    }return sum;
}
const arr =[2,2,5,7,9,3,12,45,65,42,20,44,-45];
let sum = sumArray(arr);
console.log(sum)
