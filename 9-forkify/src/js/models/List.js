import uniqid from 'uniqid'

export default class List {
    constructor() {
        this.items = [];
    }

    addItem(count, unit, ingredient){
        const item = {
            id : uniqid(),
            count,
            unit,
            ingredient
        };

        this.items.push(item);
    }

    deleteItem(id) {
        const index = this.items.findIndex(element => element.id === id);

        this.items.splice(index, 1);
    }

    updateCount(id, newCount) {
        const item = this.items.find(element => element.id === id);
        item.count = newCount;
    }
}