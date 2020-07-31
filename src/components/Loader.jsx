import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Loader = () => {
  const loader = useSelector(state => state.loader);

  console.log('Loader Re-rendered');
  return (
    loader &&
    <div className="d-flex justify-content-center flex-fill mt-5">
      <Spinner animation="grow" variant="info"/>
    </div>
  );
};

export default Loader;
