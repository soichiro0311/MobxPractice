import * as React from 'react';
import Item, { ItemProps } from './Component/Item'
interface Props {

}


export default class VendingMachine extends React.Component<Props>{
    colaItemProps: ItemProps = { itemName: "cola" }
    teaItemProps: ItemProps = { itemName: "tea" }
    coffeeItemProps: ItemProps = { itemName: "coffee" }
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