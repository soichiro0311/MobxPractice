import { observable } from 'mobx';

export interface ICountStore {
    currentNumber: number,
    countUp: Function,
    countDown: Function,
    fizzBuzz: Function,
}

export default class CountStore implements ICountStore {
    @observable currentNumber: number;

    constructor() {
        this.currentNumber = 0;
    }

    public countUp(this: CountStore) {
        this.currentNumber++;
    }

    public countDown(this: CountStore) {
        this.currentNumber--;
    }

    public fizzBuzz(): string {
        if (this.currentNumber == 0) {
            return "";
        }

        if (this.currentNumber % 15 == 0) {
            return "FizzBuzz";
        } else if (this.currentNumber % 3 == 0) {
            return "Fizz";
        } else if (this.currentNumber % 5 == 0) {
            return "Buzz"
        } else {
            return "";
        }
    }
}

export const store = new CountStore();