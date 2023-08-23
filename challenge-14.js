function findMaxmiumNumber(ar){
    let max = ar[0];
    for(let i =0; i< ar.length ; i++){
        if(ar[i] > max){
            max = ar[i];
        }
    }return max;
}

const arr = [12,15,14,5,78,90,1,20,];
const result =findMaxmiumNumber(arr);
console.log(result)