import CountStore from '../../../Counter/stores/CountStore';

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