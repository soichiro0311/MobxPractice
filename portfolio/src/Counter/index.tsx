import * as React from 'react';
import { inject, observer } from '../../node_modules/mobx-react';
import CountStore from './stores/CountStore';

interface Props {
    countStore?: CountStore
};

@inject("countStore")
@observer
export default class Counter extends React.Component<Props> {
    public render() {
        const { countStore } = this.props;
        return (
            <div className="counter-container">
                <div className="countup">
                    <button onClick={countStore!.countUp.bind(countStore)}> + </button>
                </div>
                <div className="display-number">
                    {countStore!.currentNumber}
                </div>
                <div className="countdown">
                    <button onClick={countStore!.countDown.bind(countStore)}> - </button>
                </div>
            </div>
        )
    }
}