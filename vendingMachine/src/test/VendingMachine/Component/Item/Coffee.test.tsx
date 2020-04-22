import * as React from 'react';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Coffee from "../../../../VendingMachine/Component/Item/Coffee"
import DepositMoneyStore from '../../../../VendingMachine/Store/DepositMoneyStore';
import PurchaseItemStore from '../../../../VendingMachine/Store/PurchaseItemStore';

configure({ adapter: new Adapter() });

const createProps = () => {
    return { depositMoneyStore: new DepositMoneyStore(), purchaseItemStore: new PurchaseItemStore() }
}

it('class属性がcoffee-itemであること', () => {
    const wrapper = shallow(<Coffee {...createProps()} />).dive();
    expect(wrapper.find(".coffee-item")).toHaveLength(1);
});

it('購入ボタンが表示されること', () => {
    const wrapper = shallow(<Coffee {...createProps()} />).dive();
    expect(wrapper.find("button").text()).toEqual("購入")
});

it('価格が130円で表示されること', () => {
    const wrapper = shallow(<Coffee {...createProps()} />).dive();
    expect(wrapper.find(".item-price").text()).toEqual("価格: 130円");
});

it('入金額が価格に満たない場合、購入ボタンが押下できないこと', () => {
    const props = createProps()
    props.depositMoneyStore.add("20")
    const wrapper = shallow(<Coffee {...props} />).dive();
    expect(wrapper.find('button').getElement().props.disabled).toBeTruthy()
});

it('入金額が価格を満たしている場合、購入ボタンが押下できること', () => {
    const props = createProps()
    props.depositMoneyStore.add("200")
    const wrapper = shallow(<Coffee {...props} />).dive();
    expect(wrapper.find('button').getElement().props.disabled).toBeFalsy()
});

