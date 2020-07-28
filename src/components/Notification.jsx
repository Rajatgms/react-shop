import React from 'react';
import { Alert } from 'react-bootstrap';
import { string } from 'prop-types';

const Notification = (props) => {
  const { variant, message, href } = props;
  return (
    <Alert variant={variant} className="text-center">
      { href ?
        <Alert.Link href={href}>
          {message}
        </Alert.Link>
        : message}
    </Alert>
  );
};

Notification.propTypes = {
  variant: string.isRequired,
  message: string.isRequired,
  href: string
}

Notification.defaultProps = {
  href: null
}

export default Notification;
