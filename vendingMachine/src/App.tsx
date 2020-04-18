import './App.css';
import { Provider } from 'mobx-react';
import * as React from 'react';
import VendingMachine from './VendingMachine';


export default class App extends React.Component {
  public render() {
    return (
      <Provider >
        <VendingMachine />
      </Provider>
    );
  }
}
