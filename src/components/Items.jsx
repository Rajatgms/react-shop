import React, { useEffect } from 'react';
import { CardDeck, Col } from 'react-bootstrap';
import Flaticon from './Flaticon';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import { fetchAllItems } from '../slice/itemsSlice';

const Items = () => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch]);

  console.log('Items Re-rendered');
  return (
    items && items.length > 0 &&
    <CardDeck className="mx-0">
      {
        items.map(item => (
          <Col md={3} key={item.name}>
            <Item item={item}/>
          </Col>
        ))
      }
      <Flaticon/>
    </CardDeck>
  );
};

export default Items;
