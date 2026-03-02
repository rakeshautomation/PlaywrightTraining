//regular function named function
function sum(a:number,b:number):number{
    let c:number=a+b
    return c

}
let sum1=sum(10,20);
console.log("sum of two number is:"+sum1);
//Arrow function:
let sum2=(a:number,b:number):number=> a+b
 console.log("sum of two number using arrow function is:"+sum2(30,40));


let square=(a:number):number=> a*a;
console.log("square of a number is:"+square(5));