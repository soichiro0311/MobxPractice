import './App.css';
import { Provider } from 'mobx-react';
import * as React from 'react';
import VendingMachine from './VendingMachine';
import { depositMoneyStoreInstance } from './VendingMachine/Store/DepositMoneyStore'
import { purchaseItemStoreInstance } from './VendingMachine/Store/PurchaseItemStore'

var props = {
  depositMoneyStore: depositMoneyStoreInstance,
  purchaseItemStore: purchaseItemStoreInstance
}

export default class App extends React.Component {
  public render() {
    return (
      <Provider >
        <VendingMachine {...props} />
      </Provider>
    );
  }
}
