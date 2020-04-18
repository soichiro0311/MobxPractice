import * as React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import VendingMachine from '../VendingMachine';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it('VendingMachineコンポーネントが描画されること', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(VendingMachine)).toHaveLength(1);
});
