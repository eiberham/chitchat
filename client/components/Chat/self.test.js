import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'enzyme';
import Chat from './index';

describe('Chat', () => {
    it('Matches snapshot', () => {
        const component = render(<Chat />);
        expect(component).toMatchSnapshot();
    })
});