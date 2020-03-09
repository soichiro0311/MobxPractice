import { observable } from 'mobx';

export default class CountStore {
    @observable public currentNumber: number;

    constructor() {
        this.currentNumber = 0;
    }

    public countUp() {
        this.currentNumber++;
    }

    public countDown() {
        this.currentNumber--;
    }
}

export const store = new CountStore();