// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

// ans --------------------->

function getPositiveNumbersOfArr(ar){
    let ar2=[];
    for(let i=0; i<ar.length; i++){
        let elements = ar[i];
        if(elements >= 0 ){
            ar2.push(elements);
        }
    }return ar2;
}

let array = [1,5,8,-4,-165,39,741,788,-556]
const onlyPositiveNumbers = getPositiveNumbersOfArr(array);
console.log(onlyPositiveNumbers)