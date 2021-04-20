module.exports = {
  orderCallback: (cart, cb) => {
    // send information from cart to server
  
    setTimeout(() => {
        // notify that the order was successful
        cb(true)
    }, 500)
  },
  orderPromise: cart =>
    new Promise(resolve => 
      resolve(true)
    )
}
