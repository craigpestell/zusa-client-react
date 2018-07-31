import React from 'react';
import { shallow } from 'enzyme';
import CatalogPage from './CatalogPage';

describe('(Component) <CatalogPage />', () => {
    it('should render the correct page title', () => {
        const wrapper = shallow( < CatalogPage / > );
        expect(wrapper.find('h2').text()).toEqual('Catalog');
    });

    it('should render a <p> with correct text', () => {
        const wrapper = shallow( < CatalogPage / > );
        expect(wrapper.find('p').text()).toEqual(
            'Some info about React Redux Auth0 Kit.'
        );
    });
});