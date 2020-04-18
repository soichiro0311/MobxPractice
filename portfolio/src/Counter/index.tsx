import * as React from 'react';
import { inject, observer } from '../../node_modules/mobx-react';
import { ICountStore } from './stores/CountStore';

interface Props {
    countStore?: ICountStore
};

@inject("countStore")
@observer
export default class Counter extends React.Component<Props> {

    countdown() {
        this.props.countStore!.countDown()
    }

    public render() {
        const { countStore } = this.props;

        function countup() {
            countStore!.countUp()
        }

        function countdown() {
            countStore!.countDown()
        }

        return (
            <div className="counter-container">
                <div className="display-number">
                    {this.props.countStore!.currentNumber}
                </div>
                <div className='operation'>
                    <div className="countup">
                        <button onClick={countup}> + </button>
                    </div>
                    <div className="countdown">
                        <button onClick={countdown}> - </button>
                    </div>
                </div>
                <div className="display-fizzbuzz">
                    {this.props.countStore!.fizzBuzz()}
                </div>
            </div >
        )
    }
}