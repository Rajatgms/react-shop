import React, { useEffect } from 'react';
import { CardDeck, Col } from 'react-bootstrap';
import Flaticon from './Flaticon';
import { arrayOf, func } from 'prop-types';
import itemShape from '../proptypes/itemShape';
import fetchMarketItems from '../API/fetchMarketItems';
import ItemContainer from '../containers/ItemContainer';

const Items = (props) => {
  const { items, saveItems, startLoader } = props;

  useEffect(() => {
    if(items.length === 0) {
      startLoader(true);
      fetchMarketItems()
        .then(items => saveItems(items))
        .finally(() => startLoader(false));
    }
  }, [startLoader, saveItems, items.length]);

  return (
    <>
      {
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
      }
    </>
  );
};

Items.propTypes = {
  items: arrayOf(itemShape),
  saveItems: func.isRequired,
  startLoader: func.isRequired,
};

Items.defaultProps = {
  items: [],
};
export default Items;
