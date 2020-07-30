import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  console.log('Loader Re-rendered');
  return(
    <div className="d-flex justify-content-center flex-fill mt-5">
      <Spinner animation="grow" variant="info"/>
    </div>
  )
}

export default Loader;
