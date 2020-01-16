import React from 'react';
import { render } from 'enzyme';
import Login from './index';

describe('Login', () => {
    it('Matches snapshot', () => {
        const component = render(<Login />);
        expect(component).toMatchSnapshot();
    })
});