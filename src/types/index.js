/* @flow */
/* eslint-disable no-use-before-define */

import type { Store as ReduxStore } from 'redux';

import type { Reducers } from '../reducers';

// Reducers
export type Home = {
  +readyStatus: string,
  +err: any,
  +list: Array<Object>
};

export type UserInfo = {
  +[userId: string]: {
    +readyStatus: string,
    +err: any,
    +info: Object
  }
};

export type WorkOrder = {
  +[workOrderId: string]: {
    +status: string,
    +err: any,
    +info: Object
  }
};

// State
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V; // eslint-disable-line no-undef
export type ReduxState = $ObjMap<Reducers, $ExtractFunctionReturn>; // eslint-disable-line no-undef

// Action
export type Action =
  | { type: 'USERS_REQUESTING' }
  | { type: 'USERS_SUCCESS', data: Array<Object> }
  | { type: 'USERS_FAILURE', err: any }
  | { type: 'USER_REQUESTING', userId: string }
  | { type: 'USER_SUCCESS', userId: string, data: Object }
  | { type: 'USER_FAILURE', userId: string, err: any }
  | { type: 'CATALOG_REQUESTING' }
  | { type: 'CATALOG_SUCCESS', data: Array<Object> }
  | { type: 'CATALOG_FAILURE', err: any }
  | { type: 'WORKORDER_REQUESTING', workOrderId: string }
  | { type: 'WORKORDER_SUCCESS', workOrderId: string, data: Object }
  | { type: 'WORKORDER_FAILURE', workOrderId: string, err: any };

export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
export type GetState = () => ReduxState;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;

// Store
export type Store = ReduxStore<ReduxState, Action>;
