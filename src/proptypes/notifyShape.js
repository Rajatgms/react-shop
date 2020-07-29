import { shape, string } from 'prop-types';

const notifyShape = shape({
  variant: string,
  message: string,
});

export default notifyShape;
