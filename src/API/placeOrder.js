const placeOrder = (status) => {
  return new Promise((resolve, reject) => {
    if(status) {
      setTimeout(() => resolve({status: 'success', message: 'Order placed successfully!!!'}), 2000)
    } else {
      setTimeout(() => reject({status: 'danger', message: 'Payment failed. Please retry!!!'}), 2000)
    }
  })
}

export default placeOrder;
