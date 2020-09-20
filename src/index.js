module.exports = reverse = (n) => {
    n = Math.sqrt(Math.pow(n, 2));
    const res = +(n + "").split("").reverse().join("");
    return res;
};
