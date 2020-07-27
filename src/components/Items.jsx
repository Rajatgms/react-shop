import React from 'react';
import { CardDeck, Col } from 'react-bootstrap';
import Loader from './Loader';
import Item from './Item';
import Flaticon from './Flaticon';

const Items = (props) => {
  const { items, addItem, removeItem } = props;
  return (
    <div>
      <CardDeck className="mx-0">
        {
          items ?
            <>
              {
                items.map(item => (
                  <Col md={3} key={item.name}>
                    <Item item={item} addItem={addItem} removeItem={removeItem}/>
                  </Col>
                ))
              }
              <Flaticon/>
            </> :
            <Loader/>
        }
      </CardDeck>
    </div>
  );
};

export default Items;
