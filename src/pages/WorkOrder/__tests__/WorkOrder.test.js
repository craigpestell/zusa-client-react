import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { WorkOrder } from '../WorkOrder';

describe('<WorkOrder />', () => {
  const tree = (props, actions) =>
    renderer
      .create(
        <MemoryRouter>
          <WorkOrder {...props} {...actions} />
        </MemoryRouter>
      )
      .toJSON();

  test('should call fetchUserIfNeeded when componentDidMount', () => {
    const mockAction = jest.fn();
    const props = {
      workOrder: {},
      match: { params: { id: 1 } }
    };
    const actions = { fetchUserIfNeeded: mockAction };

    mount(
      <MemoryRouter>
        <WorkOrder {...props} {...actions} />
      </MemoryRouter>
    );

    expect(mockAction).toHaveBeenCalled();
  });

  test('renders the loading status if data invalid', () => {
    const props = {
      workOrder: {},
      match: { params: { id: 1 } }
    };
    const actions = { fetchUserIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders the loading status if requesting data', () => {
    const props = {
      workOrder: { 1: { readyStatus: 'USER_REQUESTING' } },
      match: { params: { id: 1 } }
    };
    const actions = { fetchUserIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders an error if loading failed', () => {
    const props = {
      workOrder: { 1: { readyStatus: 'USER_FAILURE' } },
      match: { params: { id: 1 } }
    };
    const actions = { fetchUserIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders the <UserCard /> if loading was successful', () => {
    const props = {
      workOrder: {
        1: {
          readyStatus: 'USER_SUCCESS',
          info: {
            name: 'Welly',
            phone: '007',
            email: 'test@gmail.com',
            website: 'www.test.com'
          }
        }
      },
      match: { params: { id: 1 } }
    };
    const actions = { fetchUserIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });
});
