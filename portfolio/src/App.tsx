import './App.css';
import Counter from './Counter';
import { store } from './Counter/stores/CountStore';
import { Provider } from 'mobx-react';
import * as React from 'react';

var props = {
  countStore: store
}

export default class App extends React.Component {
  public render() {
    return (
      <Provider {...props}>
        <Counter />
      </Provider>
    );
  }
}
