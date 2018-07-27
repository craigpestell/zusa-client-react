/* @flow */

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import { userAction } from '../../actions';
import type {
  WorkOrder as WorkOrderType,
  Dispatch,
  ReduxState
} from '../../types';
import { UserCard } from '../../components';
import styles from './styles.scss';

type Props = {
  workOrder: WorkOrderType,
  match: Object,
  fetchUserIfNeeded: (id: string) => void
};

// Export this for unit testing more easily
export class WorkOrder extends PureComponent<Props> {
  componentDidMount() {
    const { fetchUserIfNeeded, match } = this.props;

    fetchUserIfNeeded(match.params.id);
  }

  renderUserCard = () => {
    const {
      workOrder,
      match: { params }
    } = this.props;
    const workOrderById = workOrder[params.id];

    if (!workOrderById || workOrderById.readyStatus === 'USER_REQUESTING') {
      return <p>Loading...</p>;
    }
    if (workOrderById.readyStatus === 'USER_FAILURE') {
      return <p>Oops, Failed to load info!</p>;
    }

    return <UserCard info={workOrderById.info} />;
  };

  render() {
    return (
      <div className={styles.WorkOrder}>
        <Helmet title="User Info" />
        {this.renderUserCard()}
      </div>
    );
  }
}

const connector = connect(
  ({ workOrder }: ReduxState) => ({ workOrder }),
  (dispatch: Dispatch) => ({
    fetchUserIfNeeded: (id: string) =>
      dispatch(userAction.fetchUserIfNeeded(id))
  })
);

export default compose(
  withRouter,
  connector
)(WorkOrder);
