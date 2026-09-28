export class Counter {
    counter: number = 0;

    constructor(start: number = 0) {
        this.counter = start;
    }

    increment(): number {
        return ++this.counter;
    }

    decrement(): number {
        return --this.counter;
    }
}
