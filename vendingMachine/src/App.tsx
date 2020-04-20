import './App.css';
import { Provider } from 'mobx-react';
import * as React from 'react';
import VendingMachine from './VendingMachine';
import { depositMoneyStoreInstance } from './VendingMachine/Store/DepositMoneyStore'

var props = {
  depositMoneyStore: depositMoneyStoreInstance
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
