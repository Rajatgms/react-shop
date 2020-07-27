import React from 'react';
import { Alert } from 'react-bootstrap';

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

export default Notification;
