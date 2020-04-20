import * as React from 'react';
import { shallow } from 'enzyme';
import VendingMachine from '../../VendingMachine';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Item from "../../VendingMachine/Component/Item"
import DepositMoneyStore from '../../VendingMachine/Store/DepositMoneyStore'

configure({ adapter: new Adapter() });

const createProps = () => {
    const props = { depositMoneyStore: new DepositMoneyStore() }
    return props;
}


describe('商品表示の共通処理', () => {
    it('商品表示エリアが描画されること', () => {
        const wrapper = shallow(<VendingMachine {...createProps()} />);
        expect(wrapper.dive().find(".item-container")).toHaveLength(1);
    });
})

describe('コーラの商品表示', () => {
    it('コーラの表示が描画されること', () => {
        const wrapper = shallow(<VendingMachine {...createProps()} />).dive();
        expect(wrapper.find(Item).at(0).dive().find(".cola-item")).toHaveLength(1);
    });

    it('コーラの価格が120円で表示されること', () => {
        const wrapper = shallow(<VendingMachine {...createProps()} />).dive();
        expect(wrapper.find(Item).at(0).dive().find(".item-price").text()).toEqual("価格: 120円");
    });
})

describe('お茶の商品表示', () => {
    it('お茶の表示が描画されること', () => {
        const wrapper = shallow(<VendingMachine {...createProps()} />).dive();
        expect(wrapper.find(Item).at(1).dive().find(".tea-item")).toHaveLength(1);
    });

    it('お茶の価格が100円で表示されること', () => {
        const wrapper = shallow(<VendingMachine {...createProps()} />).dive();
        expect(wrapper.find(Item).at(1).dive().find(".item-price").text()).toEqual("価格: 100円");
    });
})

describe('コーヒーの商品表示', () => {
    it('コーヒーの表示が描画されること', () => {
        const wrapper = shallow(<VendingMachine {...createProps()} />).dive();
        expect(wrapper.find(Item).at(2).dive().find(".coffee-item")).toHaveLength(1);
    });

    it('コーヒーが130円で表示されること', () => {
        const wrapper = shallow(<VendingMachine {...createProps()} />).dive();
        expect(wrapper.find(Item).at(2).dive().find(".item-price").text()).toEqual("価格: 130円");
    });
})

describe('入金処理', () => {
    it('120円を入力すると入金額が120円で表示されること', () => {
        const wrapper = shallow(<VendingMachine  {...createProps()} />).dive();
        wrapper.find('input').simulate('change', { target: { value: '120' } });
        wrapper.find('button').simulate('click');
        expect(wrapper.find(".input-money").text()).toEqual("投入金額: 120");
    });

    it('入金ボタンが表示されること', () => {
        const wrapper = shallow(<VendingMachine  {...createProps()} />).dive();
        expect(wrapper.find('button').text()).toEqual("入金")
    });

    it('入金フォームに金額が未入力の場合、入金ボタンが押せないこと', () => {
        const wrapper = shallow(<VendingMachine  {...createProps()} />).dive();
        expect(wrapper.find('button').getElement().props.disabled).toBeTruthy()
    });

    it('未入金の場合、下のフォームから入金してくださいと表示されること', () => {
        const wrapper = shallow(<VendingMachine  {...createProps()} />).dive();
        expect(wrapper.find(".input-money").text()).toEqual("下のフォームから入金してください");
    });
})