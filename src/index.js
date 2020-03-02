module.exports = function reverse (n) {
    var arr = [];

    for (var i = 0; i < n.length; i++) {
        arr[i] = n.charAt(i);
    }
	arr.reverse();
	alert(arr); 
}
