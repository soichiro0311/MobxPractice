import * as React from 'react';
import Item, { ItemProps } from './Component/Item'
import { inject, observer } from 'mobx-react';
import DepositMoneyStore from './Store/DepositMoneyStore';
import PurchaseItemStore from './Store/PurchaseItemStore';
import { observable } from 'mobx';

interface Props {
    depositMoneyStore: DepositMoneyStore,
    purchaseItemStore: PurchaseItemStore
}

@inject("depositMoneyStore", "purchaseItemStore")
@observer
export default class VendingMachine extends React.Component<Props>{
    @observable depositMoneyFormStr = ""

    public render() {

        const { depositMoneyStore, purchaseItemStore } = this.props;

        var isNotAlreadyInputForm: boolean = this.depositMoneyFormStr == ""

        var isNotAlreadyDepositMoney: boolean = depositMoneyStore.isNotDeposit()

        const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.depositMoneyFormStr = e.target!.value;
        }

        const addMoney = () => {
            depositMoneyStore.add(this.depositMoneyFormStr)
        }

        const displayShouldDepositMoneyMessage = () => {
            return <div className="input-money">下のフォームから入金してください</div>
        }

        const displayAlreadyDepositMoney = () => {
            return <div className="input-money">投入金額: {depositMoneyStore.depositAmount()}</div>
        }

        const createColaItemProps = () => {
            const onPurchaseFunction = () => {
                purchaseItemStore.purchase("cola")
            }
            const props: ItemProps = { itemCssName: "cola", itemPrice: 120, purchaseFunction: onPurchaseFunction }
            return props;
        }

        const createTeaItemProps = () => {
            const onPurchaseFunction = () => {
                purchaseItemStore.purchase("tea")
            }
            const props: ItemProps = { itemCssName: "tea", itemPrice: 100, purchaseFunction: onPurchaseFunction }
            return props;
        }

        const createCoffeeItemProps = () => {
            const onPurchaseFunction = () => {
                purchaseItemStore.purchase("coffee")
            }
            const props: ItemProps = { itemCssName: "coffee", itemPrice: 130, purchaseFunction: onPurchaseFunction }
            return props;
        }

        return (
            <div className="vending-machine-container">
                <div className="item-container" >
                    <Item {...createColaItemProps()} />
                    <Item {...createTeaItemProps()} />
                    <Item {...createCoffeeItemProps()} />
                    <div className="money-container">{
                        isNotAlreadyDepositMoney ?
                            displayShouldDepositMoneyMessage() : displayAlreadyDepositMoney()}
                        <input type="text" value={this.depositMoneyFormStr} onChange={changeText} />
                        <button onClick={addMoney} disabled={isNotAlreadyInputForm}>入金</button>
                    </div>
                </div>
                <div className="purchase-item-container">
                    <h1>購入済み商品</h1>
                    <div className="purchase-item-list">
                        <ul>
                            <li>コーラ: {purchaseItemStore.purchaseItemAmount("cola")}</li>
                            <li>お茶: {purchaseItemStore.purchaseItemAmount("tea")}</li>
                            <li>コーヒー: {purchaseItemStore.purchaseItemAmount("coffee")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}