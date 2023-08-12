/* coding challenge 1 */

// for(i=0;i<=10;i++){
//     console.log(i)
// }

/*  coding challenge 2 */

// for(i=1;i<=100; i+=2){
//     console.log(i)
// }

/* coding challenge 3 */


// for(i=1; i<=10; i++){
//     let row = '7 * '+ i + ' = ' +i*7;
//     console.log(row)
// }


/*  coding challenge 4  */

// for(let i=1; i<=10;i++){
//     printTable(i);
//     println('');
// }

// function printTable(n){
//     for(let  i=1; i<=10 ; i++){
//       let row = n + ' * ' + i + ' = '+i*n;
      
//     }return ;
// }
// for (let i=1; i<=10; i++){


// printTable(i);

// }
/* coding challenge 5 */

// let sum=0;
// for(i=1;i<=10;i++){
//     sum+=i;
// }
// console.log(sum)



/* coding challenge 6 */
// calculate 10!

// let calculation = 1; 
// for(i=10; i>=1;i--){
//     calculation *= i;
// }
// console.log(calculation)


/* coding challenge 7 */
// calculate the sum of odd numbers that grater than 10 and less than 30

// let sum=0;
// for(i=11; i<=30; i+=2){
//     sum+=i;
// }
// console.log(sum)



/* coding challenge 8 */
// create a function that will convert from celius to ferenhite

// function fere(f){
//       return f * 1.8+32;
// }
// let celcius = fere(3);
// console.log(celcius)

/* coding challenge 9 */
// create a function that will convert from furenhite to celcius

// function celcius(n){
//     return (n-32)*0.5555556;
// }

// let cel = celcius(104)
// console.log(cel)


/* coding challenge 10 */
// calculate the sum of numbers from an array of numbers 

function sumOfArr(arr){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;

}

const array= [1,9];
const result = sumOfArr(array);
console.log(result)