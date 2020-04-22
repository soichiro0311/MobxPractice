import * as React from 'react';
import Item from '.';
import DepositMoneyStore from '../../Store/DepositMoneyStore';
import PurchaseItemStore from '../../Store/PurchaseItemStore';
import { ItemProps } from '.';

export interface Props {
    depositMoneyStore: DepositMoneyStore,
    purchaseItemStore: PurchaseItemStore
}

export default class Coffee extends React.Component<Props> {
    createProps = () => {
        const itemPrice = 130
        const onPurchaseFunction = () => {
            this.props.purchaseItemStore.purchase("coffee")
            this.props.depositMoneyStore.subtract(itemPrice)
        }
        const props: ItemProps = { itemCssName: "coffee", itemPrice, purchaseFunction: onPurchaseFunction, depositMoney: this.props.depositMoneyStore.depositAmount() }
        return props;
    }
    public render() {
        return <Item {...this.createProps()} />
    }
}