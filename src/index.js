module.exports = function reverseInt(n){
    parseFloat(
        n
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(n)
      
    return n
}
