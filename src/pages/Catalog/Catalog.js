/* @flow */

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { catalogAction } from '../../actions';
import type { Catalog as CatalogType, Dispatch, ReduxState } from '../../types';
import { CatalogList } from '../../components';
import styles from './styles.scss';

type Props = { catalog: CatalogType, fetchCatalogIfNeeded: () => void };

// Export this for unit testing more easily
export class Catalog extends PureComponent<Props> {
  componentDidMount() {
    const { fetchCatalogIfNeeded } = this.props;

    fetchCatalogIfNeeded();
  }

  renderCatalogList = () => {
    const { catalog } = this.props;
    if (
      !catalog.readyStatus ||
      catalog.readyStatus === 'CATALOG_INVALID' ||
      catalog.readyStatus === 'CATALOG_REQUESTING'
    ) {
      return <p>Loading...</p>;
    }
    if (catalog.readyStatus === 'CATALOG_FAILURE') {
      return <p>Oops, Failed to load list!</p>;
    }

    return (
      <div className={styles.Catalog}>
        <Helmet title="Catalog" />
        <CatalogList list={catalog.list.data.workOrders} />
      </div>
    );
  };

  render() {
    return <div className={styles.Catalog}>{this.renderCatalogList()}</div>;
  }
}

const connector = connect(
  ({ catalog }: ReduxState) => ({ catalog }),
  (dispatch: Dispatch) => ({
    fetchCatalogIfNeeded: () => dispatch(catalogAction.fetchCatalogIfNeeded())
  })
);

export default compose(
  withRouter,
  connector
)(Catalog);
