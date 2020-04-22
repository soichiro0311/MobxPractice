import * as React from 'react';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Item from "../../../../VendingMachine/Component/Item"

configure({ adapter: new Adapter() });

it('class属性にitemが追加されること', () => {
    const props = { itemCssName: "test", itemPrice: 100, purchaseFunction: () => { }, depositMoney: 10 }
    const wrapper = shallow(<Item {...props} />);
    expect(wrapper.find(".test-item")).toHaveLength(1);
});

it('購入ボタンが表示されること', () => {
    const props = { itemCssName: "test", itemPrice: 100, purchaseFunction: () => { }, depositMoney: 10 }
    const wrapper = shallow(<Item {...props} />);
    expect(wrapper.find("button").text()).toEqual("購入")
});

it('価格が表示されること', () => {
    const props = { itemCssName: "test", itemPrice: 100, purchaseFunction: () => { }, depositMoney: 10 }
    const wrapper = shallow(<Item {...props} />);
    expect(wrapper.find(".item-price").text()).toEqual("価格: 100円");
});

it('入金額が価格に満たない場合、購入ボタンが押下できないこと', () => {
    const props = { itemCssName: "test", itemPrice: 100, purchaseFunction: () => { }, depositMoney: 10 }
    const wrapper = shallow(<Item {...props} />);
    expect(wrapper.find('button').getElement().props.disabled).toBeTruthy()
});

it('入金額が価格を満たしている場合、購入ボタンが押下できること', () => {
    const props = { itemCssName: "test", itemPrice: 100, purchaseFunction: () => { }, depositMoney: 120 }
    const wrapper = shallow(<Item {...props} />);
    expect(wrapper.find('button').getElement().props.disabled).toBeFalsy()
});

