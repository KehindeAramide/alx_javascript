//This code defines a Rectangle class with the specified constructor and attributes.
#!/usr/bin/node
class Rectangle {

    constructor(w, h) {
        if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
            // Create an empty object if w or h is equal to 0 or not a positive integer
            return {};
        }
        this.width = w;
        this.height = h;
    }
}
  
  module.exports = Rectangle;