import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

import ForgotPasswordForm from '../components/ForgotPasswordForm';
import { LayoutCenter } from '../../common/components';
import { PageLayout } from '../../common/components/web';

import settings from '../../../../../../settings';

class ForgotPasswordView extends React.Component {
  static propTypes = {
    forgotPassword: PropTypes.func.isRequired,
    t: PropTypes.func
  };

  state = {
    sent: false
  };

  onSubmit = ({ forgotPassword, t }) => async values => {
    const result = await forgotPassword(values);

    if (result && result.errors) {
      let submitError = {
        _error: t('forgotPass.errorMsg')
      };
      result.errors.map(error => (submitError[error.field] = error.message));
      throw submitError;
    }

    this.setState({ sent: result });
  };

  render() {
    const { forgotPassword, t } = this.props;

    const renderMetaData = () => (
      <Helmet
        title={`${settings.app.name} - ${t('forgotPass.title')}`}
        meta={[
          {
            name: 'description',
            content: `${settings.app.name} - ${t('forgotPass.meta')}`
          }
        ]}
      />
    );

    return (
      <PageLayout>
        {renderMetaData()}
        <LayoutCenter>
          <h1 className="text-center">{t('forgotPass.form.title')}</h1>
          <ForgotPasswordForm onSubmit={this.onSubmit({ forgotPassword, t })} sent={this.state.sent} />
        </LayoutCenter>
      </PageLayout>
    );
  }
}

export default translate('user')(ForgotPasswordView);
