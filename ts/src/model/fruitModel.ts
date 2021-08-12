import { Color } from "../common/AdvanceTyping";

export const fruitDb: Fruit[] = [];

export class Fruit {

    public static map: {[fruitName: string]: Fruit} = {};

    public id: number;

    constructor(public name: string,
      public size: number,
      public color: Color,
      public price: number,
      public category?: 'apple') {
        this.id = fruitDb.push(this);
        Fruit.map[name] = this;
    }

    public generateGoogleSearch() {
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
