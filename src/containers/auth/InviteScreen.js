import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Invite from '../../components/auth/Invite';
import { gaPage } from '../../lib/analytics';

@inject('stores', 'actions') @observer
export default class InviteScreen extends Component {
  componentDidMount() {
    gaPage('Auth/Invite');
  }

  render() {
    const {
      actions,
      location,
    } = this.props;

    return (
      <Invite
        onSubmit={actions.user.invite}
        from={location.query.from}
      />
    );
  }
}

InviteScreen.wrappedComponent.propTypes = {
  actions: PropTypes.shape({
    user: PropTypes.shape({
      invite: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    query: PropTypes.shape({
      from: PropTypes.string,
    }),
  }).isRequired,
};
