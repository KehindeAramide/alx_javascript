//Update this script by adding a new function incr that increments the integer value
function incr() {
    this.value++;
  }
  
  const myVar = {
    type: 'object',
    value: 12,
    incr: increment,
  };
  
  console.log(myVar);
  myVar.incr();
  console.log(myVar);
  myVar.incr();
  console.log(myVar);
  myVar.incr();
  console.log(myVar);
