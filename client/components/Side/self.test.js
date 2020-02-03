import React from 'react';
import { render } from 'enzyme';
import Side from './index';

describe('Side', () => {
    it('Matches snapshot', () => {
        const component = render(<Side />);
        expect(component).toMatchSnapshot();
    });
});