function sumNums(n){
    //Base Case
    if(n == 1){
        return 1;
    }
    
    //Recursive Case
    return n + sumNums(n - 1);
}

console.log(sumNums(10));

