import * as React from 'react';
import Cola from './Component/Item/Cola'
import Tea from './Component/Item/Tea'
import Coffee from './Component/Item/Coffee'
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
            this.depositMoneyFormStr = ""
        }

        const displayShouldDepositMoneyMessage = () => {
            return <div className="input-money">下のフォームから入金してください</div>
        }

        const displayAlreadyDepositMoney = () => {
            return <div className="input-money">投入金額: {depositMoneyStore.depositAmount()}</div>
        }

        return (
            <div className="vending-machine-container">
                <div className="item-container" >
                    <Cola {...this.props} />
                    <Tea {...this.props} />
                    <Coffee {...this.props} />
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