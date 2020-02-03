import React from 'react';
import { render } from 'enzyme';
import Footer from './index';

describe('Footer', () => {
    it('Matches snapshot', () => {
        const component = render (<Footer />);
        expect(component).toMatchSnapshot();
    });
});