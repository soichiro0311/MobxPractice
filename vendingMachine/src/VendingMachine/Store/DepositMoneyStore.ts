import { observable } from 'mobx';

export default class DepositMoneyStore {
    @observable depositMoney: number = 0;

    add = (depositMoneyStr: string) => {
        this.depositMoney = Number(depositMoneyStr);
    }

    depositAmount = () => {
        return this.depositMoney;
    }

    isNotDeposit = () => {
        return this.depositMoney == 0
    }
}

export const depositMoneyStoreInstance = new DepositMoneyStore();