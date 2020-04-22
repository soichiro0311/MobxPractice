import * as React from 'react';
import { shallow } from 'enzyme';
import VendingMachine from '../../VendingMachine';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Item from "../../VendingMachine/Component/Item"
import DepositMoneyStore from '../../VendingMachine/Store/DepositMoneyStore'
import PurchaseItemStore from '../../VendingMachine/Store/PurchaseItemStore';

configure({ adapter: new Adapter() });

const createProps = () => {
    const props = { depositMoneyStore: new DepositMoneyStore(), purchaseItemStore: new PurchaseItemStore() }
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

    it('すでに120円入金されている状態で130円入力すると入金額が250円で表示されること', () => {
        const props = createProps();
        props.depositMoneyStore.add("120")
        const wrapper = shallow(<VendingMachine  {...props} />).dive();
        wrapper.find('input').simulate('change', { target: { value: '130' } });
        wrapper.find('button').simulate('click');
        expect(wrapper.find(".input-money").text()).toEqual("投入金額: 250");
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

describe('購入済み商品表示', () => {
    it('購入済み商品エリアが表示されること', () => {
        const wrapper = shallow(<VendingMachine  {...createProps()} />).dive();
        expect(wrapper.find('.purchase-item-container')).toHaveLength(1);
        expect(wrapper.find('.purchase-item-container').find("h1").text()).toEqual("購入済み商品");
    });

    it('コーラを購入すると購入済み商品エリアにコーラが1で表示されること', () => {
        const wrapper = shallow(<VendingMachine  {...createProps()} />).dive();
        expect(wrapper.find('.purchase-item-container').find("ul").find("li").at(0).text()).toEqual("コーラ: 0");
        wrapper.find(Item).at(0).dive().find(".item-display").find("button").simulate("click")
        expect(wrapper.find('.purchase-item-container').find("ul").find("li").at(0).text()).toEqual("コーラ: 1");
    });

    it('コーラを1個購入済みの場合、コーラを購入すると購入済み商品エリアにコーラが2で表示されること', () => {
        const wrapper = shallow(<VendingMachine  {...createProps()} />).dive();
        wrapper.find(Item).at(0).dive().find(".item-display").find("button").simulate("click")
        expect(wrapper.find('.purchase-item-container').find("ul").find("li").at(0).text()).toEqual("コーラ: 1");
        wrapper.find(Item).at(0).dive().find(".item-display").find("button").simulate("click")
        expect(wrapper.find('.purchase-item-container').find("ul").find("li").at(0).text()).toEqual("コーラ: 2");
    });

    it('お茶を購入すると購入済み商品エリアにお茶が1で表示されること', () => {
        const wrapper = shallow(<VendingMachine  {...createProps()} />).dive();
        expect(wrapper.find('.purchase-item-container').find("ul").find("li").at(1).text()).toEqual("お茶: 0");
        wrapper.find(Item).at(1).dive().find(".item-display").find("button").simulate("click")
        expect(wrapper.find('.purchase-item-container').find("ul").find("li").at(1).text()).toEqual("お茶: 1");
    });

    it('お茶を1個購入済みの場合、お茶を購入すると購入済み商品エリアにお茶が2で表示されること', () => {
        const wrapper = shallow(<VendingMachine  {...createProps()} />).dive();
        wrapper.find(Item).at(1).dive().find(".item-display").find("button").simulate("click")
        expect(wrapper.find('.purchase-item-container').find("ul").find("li").at(1).text()).toEqual("お茶: 1");
        wrapper.find(Item).at(1).dive().find(".item-display").find("button").simulate("click")
        expect(wrapper.find('.purchase-item-container').find("ul").find("li").at(1).text()).toEqual("お茶: 2");
    });

    it('コーヒーを購入すると購入済み商品エリアにコーヒーが1で表示されること', () => {
        const wrapper = shallow(<VendingMachine  {...createProps()} />).dive();
        expect(wrapper.find('.purchase-item-container').find("ul").find("li").at(2).text()).toEqual("コーヒー: 0");
        wrapper.find(Item).at(2).dive().find(".item-display").find("button").simulate("click")
        expect(wrapper.find('.purchase-item-container').find("ul").find("li").at(2).text()).toEqual("コーヒー: 1");
    });

    it('コーヒーを1個購入済みの場合、コーヒーを購入すると購入済み商品エリアにコーヒーが2で表示されること', () => {
        const wrapper = shallow(<VendingMachine  {...createProps()} />).dive();
        wrapper.find(Item).at(2).dive().find(".item-display").find("button").simulate("click")
        expect(wrapper.find('.purchase-item-container').find("ul").find("li").at(2).text()).toEqual("コーヒー: 1");
        wrapper.find(Item).at(2).dive().find(".item-display").find("button").simulate("click")
        expect(wrapper.find('.purchase-item-container').find("ul").find("li").at(2).text()).toEqual("コーヒー: 2");
    });
})

describe('購入処理', () => {
    it('入金額が200円でコーラを購入すると入金額の表示が80円になること', () => {
        const props = createProps();
        props.depositMoneyStore.add("200")
        const wrapper = shallow(<VendingMachine  {...props} />).dive();
        wrapper.find(Item).at(0).dive().find(".item-display").find("button").simulate("click")
        expect(wrapper.find('.money-container').find(".input-money").text()).toEqual("投入金額: 80");
    });
    it('入金額が200円でお茶を購入すると入金額の表示が100円になること', () => {
        const props = createProps();
        props.depositMoneyStore.add("200")
        const wrapper = shallow(<VendingMachine  {...props} />).dive();
        wrapper.find(Item).at(1).dive().find(".item-display").find("button").simulate("click")
        expect(wrapper.find('.money-container').find(".input-money").text()).toEqual("投入金額: 100");
    });
    it('入金額が200円でコーヒーを購入すると入金額の表示が70円になること', () => {
        const props = createProps();
        props.depositMoneyStore.add("200")
        const wrapper = shallow(<VendingMachine  {...props} />).dive();
        wrapper.find(Item).at(2).dive().find(".item-display").find("button").simulate("click")
        expect(wrapper.find('.money-container').find(".input-money").text()).toEqual("投入金額: 70");
    });
});