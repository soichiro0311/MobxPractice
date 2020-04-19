import * as React from 'react';

export interface ItemProps {
    itemCssName: string
    itemPrice: number
}

export default class Item extends React.Component<ItemProps> {
    public render() {
        return (
            <div className="item-display-container">
                <div className="item-display">
                    <div className={this.props.itemCssName + '-item'} />
                    <div className="item-price">価格: {this.props.itemPrice}円</div>
                    <button type="button" >購入</button>
                </div>
            </div>
        )
    }
}