module.exports = function reverse (n) {
    var digit = 0;
    var result = 0;

    while( n ){
        digit = n % 10                  
        result = (result * 10) + digit  
        n = n/10|0                      
    }  
  
    return result  
}
