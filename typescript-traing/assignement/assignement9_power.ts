function powerNumber(x:number,n:number):number{
    //any thing to the power of o and 1
    if(n===0){
        return 1;
    }
    //Negative power case :x^-n =1/x^n
    if (n<0){
        return powerNumber(1/x,-n);

    }
    //Even case :calculate power for n/2 and square it
    if(n%2===0){
        let halfPower=powerNumber(x,n/2);
        return halfPower*halfPower;
    }   
    // odd case:multiply x by the result of n-1
    else{
        return x*powerNumber(x,n-1);
    }

}
console.log(powerNumber(2.00000, -2));