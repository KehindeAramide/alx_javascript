//This code defines a Rectangle class with the specified constructor and attributes.
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

const rect = new Rectangle(3, 3);
console.log(rect); // Outputs: Rectangle { width: 3, height: 3 }
console.log(rect.width); // Outputs: 3
console.log(rect.height); // Outputs: 3
