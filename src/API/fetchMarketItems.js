const marketItems = [
  {
    name: 'Vegetables',
    price: 35,
  },
  {
    name: 'Coffee',
    price: 30,
  },
  {
    name: 'Bread',
    price: 15,
  },
  {
    name: 'Egg',
    price: 20,
  },
  {
    name: 'Milk',
    price: 35,
  },
  {
    name: 'Snacks',
    price: 25,
  },
  {
    name: 'Cereal',
    price: 10,
  },
  {
    name: 'Fruits',
    price: 45,
  },
];

const fetchMarketItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(marketItems), 2000)
  })
}

export default fetchMarketItems;
