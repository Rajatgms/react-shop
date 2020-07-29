import { number, shape, string } from 'prop-types';

const itemShape = shape({
  name: string,
  quantity: number,
  price: number,
});

export default itemShape;
