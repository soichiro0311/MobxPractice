import * as React from 'react';
import { shallow } from 'enzyme';
import VendingMachine from '../../VendingMachine';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Item from "../../VendingMachine/Component/Item"

configure({ adapter: new Adapter() });

describe('商品表示の共通処理', () => {
    it('商品表示エリアが描画されること', () => {
        const wrapper = shallow(<VendingMachine />);
        expect(wrapper.find(".item-container")).toHaveLength(1);
    });
})

describe('コーラの商品表示', () => {
    it('コーラの表示が描画されること', () => {
        const wrapper = shallow(<VendingMachine />);
        expect(wrapper.find(Item).at(0).dive().find(".cola-item")).toHaveLength(1);
    });

    it('コーラの価格が120円で表示されること', () => {
        const wrapper = shallow(<VendingMachine />);
        expect(wrapper.find(Item).at(0).dive().find(".item-price").text()).toEqual("価格: 120円");
    });
})

describe('お茶の商品表示', () => {
    it('お茶の表示が描画されること', () => {
        const wrapper = shallow(<VendingMachine />);
        expect(wrapper.find(Item).at(1).dive().find(".tea-item")).toHaveLength(1);
    });

    it('お茶の価格が100円で表示されること', () => {
        const wrapper = shallow(<VendingMachine />);
        expect(wrapper.find(Item).at(1).dive().find(".item-price").text()).toEqual("価格: 100円");
    });
})

describe('コーヒーの商品表示', () => {
    it('コーヒーの表示が描画されること', () => {
        const wrapper = shallow(<VendingMachine />);
        expect(wrapper.find(Item).at(2).dive().find(".coffee-item")).toHaveLength(1);
    });

    it('コーヒーが130円で表示されること', () => {
        const wrapper = shallow(<VendingMachine />);
        expect(wrapper.find(Item).at(2).dive().find(".item-price").text()).toEqual("価格: 130円");
    });
})