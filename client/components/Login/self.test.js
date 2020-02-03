import 'regenerator-runtime/runtime';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'enzyme';
import { MockedProvider } from "@apollo/react-testing";
import Login from './index';

describe('Login', () => {
    it('Matches snapshot', () => {
        const component = render(
            <MockedProvider>
                <Router>
                    <Login />
                </Router>
            </MockedProvider>
        );
        expect(component).toMatchSnapshot();
    })
});