/* @flow */

import loadable from 'loadable-components';

import { ErrorDisplay, Loading } from '../../components';

export default loadable(() => import('./WorkOrder'), {
  ErrorComponent: ErrorDisplay,
  LoadingComponent: Loading
});
