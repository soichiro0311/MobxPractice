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
            const itemPrice = 120
            const onPurchaseFunction = () => {
                purchaseItemStore.purchase("cola")
                this.props.depositMoneyStore.subtract(itemPrice)
            }
            const props: ItemProps = { itemCssName: "cola", itemPrice, purchaseFunction: onPurchaseFunction, depositMoney: depositMoneyStore.depositAmount() }
            return props;
        }

        const createTeaItemProps = () => {
            const itemPrice = 100
            const onPurchaseFunction = () => {
                purchaseItemStore.purchase("tea")
                this.props.depositMoneyStore.subtract(itemPrice)
            }
            const props: ItemProps = { itemCssName: "tea", itemPrice, purchaseFunction: onPurchaseFunction, depositMoney: depositMoneyStore.depositAmount() }
            return props;
        }

        const createCoffeeItemProps = () => {
            const itemPrice = 130
            const onPurchaseFunction = () => {
                purchaseItemStore.purchase("coffee")
                this.props.depositMoneyStore.subtract(itemPrice)
            }
            const props: ItemProps = { itemCssName: "coffee", itemPrice, purchaseFunction: onPurchaseFunction, depositMoney: depositMoneyStore.depositAmount() }
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