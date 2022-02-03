function sumNums(n){
    //Base Case
    if(n == 1){
        return 1;
    }

    return n + sumNums(n - 1);
}

