import CountStore from '../../../Counter/stores/CountStore';

describe('CountUp,CountDown', () => {
    it('初期表示の数字が0であること', () => {
        const countStore = new CountStore();
        expect(countStore.currentNumber).toBe(0);
    });

    it('カウントアップを行うと表示する数字が+1されること', () => {
        const countStore = new CountStore();
        expect(countStore.currentNumber).toBe(0);
        countStore.countUp();
        expect(countStore.currentNumber).toBe(1);
    });

    it('カウントダウンを行うと表示する数字が-1されること', () => {
        const countStore = new CountStore();
        expect(countStore.currentNumber).toBe(0);
        countStore.countUp();
        expect(countStore.currentNumber).toBe(1);
        countStore.countDown();
        expect(countStore.currentNumber).toBe(0);
    });
})

describe('FizzBuzz', () => {
    it('現在の数字が3になったらFizzを返すこと', () => {
        const countStore = new CountStore();
        countUpBy(3, countStore);
        expect(countStore.currentNumber).toBe(3);
        expect(countStore.fizzBuzz()).toBe("Fizz");
    });

    it('現在の数字が2になったら""を返すこと', () => {
        const countStore = new CountStore();
        countUpBy(2, countStore);
        expect(countStore.currentNumber).toBe(2);
        expect(countStore.fizzBuzz()).toBe("");
    });

    it('現在の数字が6になったら"Fizz"を返すこと', () => {
        const countStore = new CountStore();
        countUpBy(6, countStore);
        expect(countStore.currentNumber).toBe(6);
        expect(countStore.fizzBuzz()).toBe("Fizz");
    });

    it('現在の数字が0の時""を返すこと', () => {
        const countStore = new CountStore();
        expect(countStore.currentNumber).toBe(0);
        expect(countStore.fizzBuzz()).toBe("");
    });

    it('現在の数字が5になったら"Buzz"を返すこと', () => {
        const countStore = new CountStore();
        countUpBy(5, countStore);
        expect(countStore.currentNumber).toBe(5);
        expect(countStore.fizzBuzz()).toBe("Buzz");
    });

    it('現在の数字が10になったら"Buzz"を返すこと', () => {
        const countStore = new CountStore();
        countUpBy(10, countStore);
        expect(countStore.currentNumber).toBe(10);
        expect(countStore.fizzBuzz()).toBe("Buzz");
    });

    it('現在の数字が15になったら"FizzBuzz"を返すこと', () => {
        const countStore = new CountStore();
        countUpBy(15, countStore);
        expect(countStore.currentNumber).toBe(15);
        expect(countStore.fizzBuzz()).toBe("FizzBuzz");
    });
})

const countUpBy = (count: number, countStore: CountStore) => {
    for (var i = 0; i < count; i++) {
        countStore.countUp();
    }
}