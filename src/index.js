module.exports = function reverse(n) {
    n = Math.sqrt(Math.pow(n, 2));
    var res = +(n + '').split('').reverse().join('');
    return res;
}
