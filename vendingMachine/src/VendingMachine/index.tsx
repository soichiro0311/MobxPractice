import * as React from 'react';
import Item, { ItemProps } from './Component/Item'
import { inject, observer } from 'mobx-react';
import DepositMoneyStore from './Store/DepositMoneyStore';
import { observable } from 'mobx';

interface Props {
    depositMoneyStore: DepositMoneyStore
}

@inject("depositMoneyStore")
@observer
export default class VendingMachine extends React.Component<Props>{
    @observable depositMoneyFormStr = ""

    colaItemProps: ItemProps = { itemCssName: "cola", itemPrice: 120 }
    teaItemProps: ItemProps = { itemCssName: "tea", itemPrice: 100 }
    coffeeItemProps: ItemProps = { itemCssName: "coffee", itemPrice: 130 }

    public render() {

        const { depositMoneyStore } = this.props;

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

        return (
            <div className="item-container" >
                <Item {...this.colaItemProps} />
                <Item {...this.teaItemProps} />
                <Item {...this.coffeeItemProps} />
                <div className="money-container">{
                    isNotAlreadyDepositMoney ?
                        displayShouldDepositMoneyMessage() : displayAlreadyDepositMoney()}
                    <input type="text" value={this.depositMoneyFormStr} onChange={changeText} />
                    <button onClick={addMoney} disabled={isNotAlreadyInputForm}>入金</button>
                </div>
            </div>

        )
    }
}