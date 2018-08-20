import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../../src/components/hello_world.js';

describe('<HelloWorld />', () => {
  it('renders hello webteam', () => {
    const helloWorld = shallow(<HelloWorld />);
    expect(helloWorld.find('div h1').text()).toEqual('Hello Webteam!');
  });
});