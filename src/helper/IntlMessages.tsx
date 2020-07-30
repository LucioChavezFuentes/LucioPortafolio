import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

const IntlMassage = ({intl, defaultMessage, description, id}) => intl.formatMessage({
    defaultMessage,
    description,
    id,
  });
export default injectIntl(IntlMassage);