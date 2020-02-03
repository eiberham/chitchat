import React from 'react';
import { render } from 'enzyme';
import Header from './index';

describe('Header', () => {
    it('Matches snapshot', () => {
        const component = render(<Header />);
        expect(component).toMatchSnapshot();
    });
});