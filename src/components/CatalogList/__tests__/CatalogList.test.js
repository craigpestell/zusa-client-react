import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import CatalogList from '../index';

describe('<CatalogList />', () => {
  test('renders', () => {
    const mockData = [{ id: '1', name: 'Welly' }];
    const tree = renderer
      .create(
        <MemoryRouter>
          <CatalogList list={mockData} />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
