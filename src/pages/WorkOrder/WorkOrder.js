/* @flow */

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import WorkOrderForm from '../../components/WorkOrderForm';
import { workOrderAction } from '../../actions';
import type {
  WorkOrder as WorkOrderType,
  Dispatch,
  ReduxState
} from '../../types';
// import { WorkOrderCard } from '../../components';
import styles from './styles.scss';

type Props = {
  workOrder: WorkOrderType,
  match: Object,
  fetchWorkOrderIfNeeded: (id: string) => void
};

// Export this for unit testing more easily
export class WorkOrder extends PureComponent<Props> {
  componentDidMount() {
    const { fetchWorkOrderIfNeeded, match } = this.props;

    fetchWorkOrderIfNeeded(match.params.id);
  }

  renderWorkOrder = () => {
    const {
      workOrder,
      match: { params }
    } = this.props;
    const workOrderById = workOrder[params.id];

    if (
      !workOrderById ||
      workOrderById.readyStatus === 'WORKORDER_REQUESTING'
    ) {
      return <p>Loading...</p>;
    }
    if (workOrderById.readyStatus === 'WORKORDER_FAILURE') {
      return <p>Oops, Failed to load info!</p>;
    }
    const workOrderFormData = workOrderById.workOrder.data.workOrders;
    console.log('######', workOrderFormData);
    return <WorkOrderForm workOrder={workOrderFormData} />;
  };

  render() {
    return (
      <div className={styles.WorkOrder}>
        <Helmet title="WorkOrder Info" />
        {this.renderWorkOrder()}
      </div>
    );
  }
}

const connector = connect(
  ({ workOrder }: ReduxState) => ({ workOrder }),
  (dispatch: Dispatch) => ({
    fetchWorkOrderIfNeeded: (id: string) =>
      dispatch(workOrderAction.fetchWorkOrderIfNeeded(id))
  })
);

export default compose(
  withRouter,
  connector
)(WorkOrder);
