import * as React from 'react';
import { shallow } from 'enzyme';
import VendingMachine from '../../VendingMachine';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Item from "../../VendingMachine/Component/Item"

configure({ adapter: new Adapter() });

it('商品表示エリアが描画されること', () => {
    const wrapper = shallow(<VendingMachine />);
    expect(wrapper.find(".item-container")).toHaveLength(1);
});

it('コーラの表示が描画されること', () => {
    const wrapper = shallow(<VendingMachine />);
    expect(wrapper.find(Item).at(0).dive().find(".cola-item")).toHaveLength(1);
});

it('お茶の表示が描画されること', () => {
    const wrapper = shallow(<VendingMachine />);
    expect(wrapper.find(Item).at(1).dive().find(".tea-item")).toHaveLength(1);
});

it('コーヒーの表示が描画されること', () => {
    const wrapper = shallow(<VendingMachine />);
    expect(wrapper.find(Item).at(2).dive().find(".coffee-item")).toHaveLength(1);
});