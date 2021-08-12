const fruitDb = [];

class Fruit {

    static map = {};

    constructor(name, size, color, price, category) {
        this.id = fruitDb.push(this);

        this.name = name;
        this.size = size;
        this.color = color;
        this.price = price;

        if(category)
            this.category = category;

        Fruit.map[name] = this;
    }

    generateGoogleSearch() {
        return "https://www.google.com/search?q=" + this.name;
    }
}

new Fruit('granny smith apple', 1, 'green', 5,'apple');
new Fruit('opal apple', 1, 'yellow', 5,'apple');
new Fruit('honeycrisp apple', 1, 'red', 5, 'apple');
new Fruit('watermelon', 1,'green', 4);
new Fruit('tomato', 1, 'red', 3);
new Fruit('orange', 1, 'orange', 2);
new Fruit('blueberry', 1, 'blue', 1);

module.exports = {
    Fruit,
    fruitDb
}