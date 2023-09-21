//Update this script by adding a new function incr that increments the integer value
const myVar = {
  type: 'object',
  value: 12,
  incr: function() {
    this.value++;
  }
};

console.log(myVar);
myVar.incr();
console.log(myVar);
myVar.incr();
console.log(myVar);
myVar.incr();
console.log(myVar);
