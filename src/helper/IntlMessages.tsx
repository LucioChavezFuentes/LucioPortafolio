import React from 'react';
import { FormattedMessage } from 'react-intl';



const IntlMassage = (props) => {

  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    setOpacity(1)
  }, [])

  return (
    <span style={{opacity, transition: 'opacity 1s'}}>
      <FormattedMessage {...props}  />
    </span>
  )
} 

export default IntlMassage;