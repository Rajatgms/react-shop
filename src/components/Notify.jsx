import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { string } from 'prop-types';

const Notify = (props) => {
  const { variant, message } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(variant && message);
  }, [variant, message]);

  const onClose = () => {
    setShow(false);
  };
  return (
    show ?
      <Alert variant={variant} className="text-center" onClose={onClose} dismissible>
        {message}
      </Alert> : null
  );
};

Notify.propTypes = {
  variant: string.isRequired,
  message: string.isRequired,
};

export default Notify;
