/* @flow */

import _ from 'lodash';

import type { WorkOrder, Action } from '../types';

type State = WorkOrder;

export default (state: State = {}, action: Action): State => {
  switch (action.type) {
    case 'WORKORDER_REQUESTING':
      return _.assign({}, state, {
        [action.workOrderId]: {
          readyStatus: 'WORKORDER_REQUESTING'
        }
      });
    case 'WORKORDER_FAILURE':
      return _.assign({}, state, {
        [action.workOrderId]: {
          readyStatus: 'WORKORDER_FAILURE',
          err: action.err
        }
      });
    case 'WORKORDER_SUCCESS':
      return _.assign({}, state, {
        [action.workOrderId]: {
          readyStatus: 'WORKORDER_SUCCESS',
          workOrder: action.data
        }
      });
    default:
      return state;
  }
};
