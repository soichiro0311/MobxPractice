import * as React from 'react';

export interface ItemProps {
    itemName: string
}

export default class Item extends React.Component<ItemProps> {
    public render() {
        return <div className={this.props.itemName + '-item'} />
    }
}