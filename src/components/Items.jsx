import React from 'react';
import { CardDeck, Col } from 'react-bootstrap';
import Item from './Item';
import Flaticon from './Flaticon';
import { arrayOf, func } from 'prop-types';
import itemShape from '../proptypes/item';

const Items = (props) => {
  const { items, addItem, removeItem } = props;
  return (
    items && items.length > 0 &&
    <CardDeck className="mx-0">
      {
        items.map(item => (
          <Col md={3} key={item.name}>
            <Item item={item} addItem={addItem} removeItem={removeItem}/>
          </Col>
        ))
      }
      <Flaticon/>
    </CardDeck>
  );
};

Items.propTypes = {
  items: arrayOf(itemShape).isRequired,
  addItem: func.isRequired,
  removeItem: func.isRequired,
};

export default Items;
