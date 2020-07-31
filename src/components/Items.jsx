import React, { useEffect } from 'react';
import { CardDeck, Col } from 'react-bootstrap';
import Flaticon from './Flaticon';
import { arrayOf, func } from 'prop-types';
import itemShape from '../proptypes/itemShape';
import ItemContainer from '../containers/ItemContainer';

const Items = (props) => {
  const { items, fetchItemAsync } = props;

  useEffect(() => {
    if (items.length === 0) {
      fetchItemAsync();
    }
  }, [fetchItemAsync, items.length]);

  console.log('Items Re-rendered');
  return (
    items && items.length > 0 &&
    <CardDeck className="mx-0">
      {
        items.map(item => (
          <Col md={3} key={item.name}>
            <ItemContainer item={item}/>
          </Col>
        ))
      }
      <Flaticon/>
    </CardDeck>
  );
};

Items.propTypes = {
  items: arrayOf(itemShape),
  fetchItemAsync: func.isRequired,
};

Items.defaultProps = {
  items: [],
};
export default Items;
