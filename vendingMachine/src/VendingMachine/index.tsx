import * as React from 'react';
import Item, { ItemProps } from './Component/Item'
interface Props {

}


export default class VendingMachine extends React.Component<Props>{
    colaItemProps: ItemProps = { itemCssName: "cola", itemPrice: 120 }
    teaItemProps: ItemProps = { itemCssName: "tea", itemPrice: 100 }
    coffeeItemProps: ItemProps = { itemCssName: "coffee", itemPrice: 130 }
    public render() {
        return (
            <div className="item-container">
                <Item {...this.colaItemProps} />
                <Item {...this.teaItemProps} />
                <Item {...this.coffeeItemProps} />
            </div>
        )
    }
}