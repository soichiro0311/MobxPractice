import * as React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import Counter from '../Counter';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it('CountUpコンポーネントが描画されること', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Counter)).toHaveLength(1);
});
