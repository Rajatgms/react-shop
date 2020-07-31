const placeOrder = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ status: 'success', message: 'Order placed successfully!!!' }), Math.random() * 2000);
    setTimeout(() => reject({ status: 'danger', message: 'Payment failed. Please retry!!!' }), Math.random() * 2000);
  })
}

export default placeOrder;
