import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import notifySlice from '../slice/notifySlice';

const Notify = () => {
  const { variant, message } = useSelector(state => state.notify);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setShow(variant && message);
  }, [variant, message]);

  const onClose = () => {
    setShow(false);
    dispatch(notifySlice.actions.reset());
  };

  console.log('Notify Re-rendered');
  return (
    show ?
      <Alert variant={variant} className="text-center" onClose={onClose} dismissible>
        {message}
      </Alert> : null
  );
};

export default Notify;
