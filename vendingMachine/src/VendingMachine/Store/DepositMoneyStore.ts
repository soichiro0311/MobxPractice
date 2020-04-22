import { observable } from 'mobx';

export default class DepositMoneyStore {
    @observable depositMoney: number = 0;

    add = (depositMoneyStr: string) => {
        this.depositMoney = this.depositMoney + Number(depositMoneyStr);
    }

    subtract = (subtractMoney: number) => {
        this.depositMoney = this.depositMoney - subtractMoney;
    }

    depositAmount = () => {
        return this.depositMoney;
    }

    isNotDeposit = () => {
        return this.depositMoney == 0
    }
}

export const depositMoneyStoreInstance = new DepositMoneyStore();