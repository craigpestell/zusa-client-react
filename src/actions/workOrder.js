/* @flow */

import axios from 'axios';

import type { Dispatch, GetState, ThunkAction, ReduxState } from '../types';

const API_URL = 'http://localhost:3300/api/catalog';

// Export this for unit testing more easily
/* istanbul ignore next */
export const fetchWorkOrder = (
  workOrderId: string,
  URL: string = API_URL
): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'WORKORDER_REQUESTING', workOrderId });

  try {
    const { data } = await axios.get(`${URL}/${workOrderId}`);

    /* istanbul ignore next */
    dispatch({ type: 'WORKORDER_SUCCESS', workOrderId, data });
  } catch (err) {
    /* istanbul ignore next */
    dispatch({ type: 'WORKORDER_FAILURE', workOrderId, err: err.message });
  }
};

/* istanbul ignore next */
const shouldFetchWorkOrder = (
  state: ReduxState,
  workOrderId: string
): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true;

  const workOrder = state.workOrder[workOrderId];

  // Fetching data once in production
  if (workOrder && workOrder.readyStatus === 'WORKORDER_SUCCESS') return false;

  return true;
};

/* istanbul ignore next */
export const fetchWorkOrderIfNeeded = (workOrderId: string): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState
) => {
  /* istanbul ignore next */
  if (shouldFetchWorkOrder(getState(), workOrderId)) {
    /* istanbul ignore next */
    return dispatch(fetchWorkOrder(workOrderId));
  }

  /* istanbul ignore next */
  return null;
};
