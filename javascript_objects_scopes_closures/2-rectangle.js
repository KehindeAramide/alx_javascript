//This code defines a Rectangle class with the specified constructor and attributes.
#!/usr/bin/node
class Rectangle {
    constructor (w, h) {
      if ((w > 0) && (h > 0)) {
        this.width = w;
        this.height = h;
      }
    }
  }
  
  module.exports = Rectangle;