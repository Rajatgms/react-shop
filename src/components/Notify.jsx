import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import notifyShape from '../proptypes/notifyShape';

const Notify = (props) => {
  const { variant, message } = props.notify;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(variant && message);
  }, [variant, message]);

  const onClose = () => {
    setShow(false);
  };

  console.log('Notify Re-rendered');
  return (
    show ?
      <Alert variant={variant} className="text-center" onClose={onClose} dismissible>
        {message}
      </Alert> : null
  );
};

Notify.propTypes = {
  notify: notifyShape.isRequired,
};

export default Notify;
