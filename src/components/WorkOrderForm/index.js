/* @flow */

import React from 'react';

import styles from './styles.scss';

type Props = { workOrder: Object };

const WorkOrderForm = ({ workOrder }: Props) => (
  <div className={styles.WorkOrderForm}>
    <h4>New Work Order</h4>
    <ul>
      <li>Name: {workOrder.name}</li>
    </ul>
  </div>
);

export default WorkOrderForm;
