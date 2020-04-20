import { observable } from '../../../node_modules/mobx';

export default class PurchaseItemStore {
    @observable purchaseItemAmountMap = new Map<string, number>()

    purchaseItemAmount(itemName: string) {
        return this.purchaseItemAmountMap.has(itemName) ? this.purchaseItemAmountMap.get(itemName) : 0;
    }

    purchase(itemName: string) {
        if (this.purchaseItemAmountMap.has(itemName)) {
            this.purchaseItemAmountMap.set(itemName, this.purchaseItemAmountMap.get(itemName)! + 1);
            return;
        }
        this.purchaseItemAmountMap.set(itemName, 1)
    }
}

export const purchaseItemStoreInstance = new PurchaseItemStore();