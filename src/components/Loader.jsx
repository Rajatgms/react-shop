import React from 'react';
import { bool } from 'prop-types';
import { Spinner } from 'react-bootstrap';

const Loader = (props) => {
  const { loader } = props;
  return (
    loader &&
    <div className="d-flex justify-content-center flex-fill mt-5">
      <Spinner animation="grow" variant="info"/>
    </div>
  );
};

Loader.propTypes = {
  loader: bool,
};

export default Loader;
