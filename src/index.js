function reverseInt(n){
    var digit, result = 0;

    while( n ){
        digit = n % 10                  
        result = (result * 10) + digit  
        n = n/10|0                      
    } 
    return n
}
