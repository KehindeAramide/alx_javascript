class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
            // Create an empty object if w or h is equal to 0 or not a positive integer
            return {};
        }
        this.width = w;
        this.height = h;
    }

    print() {
        for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
        }
    }
}

const rect = new Rectangle(3, 4);
rect.print();
