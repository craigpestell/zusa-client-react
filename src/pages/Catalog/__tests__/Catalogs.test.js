import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { Catalog } from '../Catalog';

describe('<Catalog />', () => {
  const tree = (props, actions) =>
    renderer
      .create(
        <MemoryRouter>
          <Catalog {...props} {...actions} />
        </MemoryRouter>
      )
      .toJSON();

  test('should call fetchCatalogIfNeeded when componentDidMount', () => {
    const mockAction = jest.fn();
    const props = {
      catalog: {}
    };
    const actions = {
      fetchCatalogIfNeeded: mockAction
    };

    mount(
      <MemoryRouter>
        <Catalog {...props} {...actions} />
      </MemoryRouter>
    );

    expect(mockAction).toHaveBeenCalled();
  });

  test('renders the loading status if data invalid', () => {
    const props = {
      catalog: { readyStatus: 'CATALOG_INVALID' }
    };
    const actions = { fetchCatalogIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders the loading status if requesting data', () => {
    const props = {
      catalog: { readyStatus: 'CATALOG_REQUESTING' }
    };
    const actions = { fetchCatalogIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders an error if loading failed', () => {
    const props = {
      catalog: { readyStatus: 'CATALOG_FAILURE' }
    };
    const actions = { fetchCatalogIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders the <CatalogList /> if loading was successful', () => {
    const props = {
      catalog: {
        readyStatus: 'CATALOG_SUCCESS',
        list: [{ id: '1', name: 'Welly' }]
      }
    };
    const actions = { fetchCatalogIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });
});
