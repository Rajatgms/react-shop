import React, { useEffect } from 'react';
import { CardDeck, Col } from 'react-bootstrap';
import Flaticon from './Flaticon';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemAsync } from '../actions/itemsAction';
import Item from './Item';

const Items = () => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchItemAsync());
    }
  }, [dispatch, items.length]);

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
