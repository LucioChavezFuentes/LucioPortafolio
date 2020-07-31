
import { injectIntl } from 'react-intl';

const IntlMassage = ({intl, defaultMessage, description, id}) => intl.formatMessage({
    defaultMessage,
    description,
    id,
  });
export default injectIntl(IntlMassage);