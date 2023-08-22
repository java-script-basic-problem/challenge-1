// Coding challenge #11: Calculate the average of the numbers in an array of numbers

// ans------------------------>

function averageArry(ar){
    let n = ar.length;
    let sum=0;
    for(let i=0 ; i<ar.length; i++){
         sum+= ar[i];
    }return sum / n;
}
arr =[2,4,6,8,9];
let average = averageArry(arr);
console.log(average) 
