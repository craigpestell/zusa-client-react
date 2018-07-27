/* @flow */

import React from 'react';
import _ from 'lodash';

import { Link } from 'react-router-dom';

import styles from './styles.scss';

type Props = { list: Array<Object> };

export default ({ list }: Props) => (
  <div className={styles.CatalogList}>
    <h4>Catalog List</h4>
    <ul>
      {_.map(list, ({ _id, name }) => (
        <li key={_id}>
          <Link to={`/wo/${_id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
);
