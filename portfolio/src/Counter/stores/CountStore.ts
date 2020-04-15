import { observable } from 'mobx';

export default class CountStore {
    @observable currentNumber: number;

    constructor() {
        this.currentNumber = 0;
    }

    public countUp() {
        this.currentNumber++;
    }

    public countDown() {
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