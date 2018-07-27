/* @flow */

import axios from 'axios';

import type { Dispatch, GetState, ThunkAction, ReduxState } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com/workorders';

// Export this for unit testing more easily
/* istanbul ignore next */
export const fetchWorkorder = (
  workorderId: string,
  URL: string = API_URL
): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'WORKORDER_REQUESTING', workorderId });

  try {
    const { data } = await axios.get(`${URL}/${workorderId}`);

    /* istanbul ignore next */
    dispatch({ type: 'WORKORDER_SUCCESS', workorderId, data });
  } catch (err) {
    /* istanbul ignore next */
    dispatch({ type: 'WORKORDER_FAILURE', workorderId, err: err.message });
  }
};

/* istanbul ignore next */
const shouldFetchWorkorder = (
  state: ReduxState,
  workorderId: string
): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true;

  const workorderInfo = state.workorderInfo[workorderId];

  // Fetching data once in production
  if (workorderInfo && workorderInfo.readyStatus === 'WORKORDER_SUCCESS')
    return false;

  return true;
};

/* istanbul ignore next */
export const fetchWorkorderIfNeeded = (workorderId: string): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState
) => {
  /* istanbul ignore next */
  if (shouldFetchWorkorder(getState(), workorderId)) {
    /* istanbul ignore next */
    return dispatch(fetchWorkorder(workorderId));
  }

  /* istanbul ignore next */
  return null;
};
