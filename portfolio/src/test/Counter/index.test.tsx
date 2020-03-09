import * as React from 'react';
import { shallow } from 'enzyme';
import Counter from '../../Counter';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CountStore from '../../Counter/stores/CountStore';

configure({ adapter: new Adapter() });

it('数字表示コンポーネントが描画されていること', () => {
    const countStore = {
        countStore: new CountStore()
    }
    const wrapper = shallow(<Counter {...countStore} />);
    expect(wrapper.dive().find(".counter-container").find(".display-number")).toHaveLength(1);
});

it('カウントアップコンポーネントが描画されていること', () => {
    const countStore = {
        countStore: new CountStore()
    }
    const wrapper = shallow(<Counter {...countStore} />);
    expect(wrapper.dive().find(".counter-container").find(".countup").find("button")).toHaveLength(1);
});

it('カウントダウンコンポーネントが描画されていること', () => {
    const countStore = {
        countStore: new CountStore()
    }
    const wrapper = shallow(<Counter {...countStore} />);
    expect(wrapper.dive().find(".counter-container").find(".countdown").find("button")).toHaveLength(1);
});