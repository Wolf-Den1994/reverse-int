module.exports = function reverse (n) {
   console.log(n)
   return Math.abs(n).toString().split('').reverse().join('');
}
