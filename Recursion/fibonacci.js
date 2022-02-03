function fibonacci(num){
    //Base Case 
    if(num == 1 || num == 2){
        return 1;
    }   

    //Recursive Case
    return fibonacci(num - 2) + fibonacci(num - 1);
}