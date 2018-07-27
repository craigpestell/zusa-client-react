/* @flow */

import {
  usersAction,
  userAction,
  catalogAction,
  workOrderAction
} from './actions';

import App from './app';
import {
  asyncHome,
  asyncUserInfo,
  asyncCatalog,
  asyncWorkOrder,
  NotFound
} from './pages';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: asyncHome, // Add your route here
        loadData: () => [
          usersAction.fetchUsersIfNeeded()
          // Add other pre-fetched actions here
        ]
      },
      {
        path: '/UserInfo/:id',
        component: asyncUserInfo,
        loadData: ({ params }: Object) => [
          userAction.fetchUserIfNeeded(params.id)
        ]
      },
      {
        path: '/catalog',
        exact: true,
        component: asyncCatalog, // Add your route here
        loadData: () => [
          catalogAction.fetchCatalogIfNeeded()
          // Add other pre-fetched actions here
        ]
      },
      {
        path: '/wo/:id',
        component: asyncWorkOrder,
        loadData: ({ params }: Object) => [
          workOrderAction.fetchWorkorderIfNeeded(params.id)
        ]
      },
      {
        component: NotFound
      }
    ]
  }
];
