export const addProduct = (product, callback = () => { }) => {
  const cart = JSON.parse(localStorage.getItem('cart') || '{}');
  const productQuantity = parseInt(localStorage.getItem('productQuantity') || 0, 10) + 1;
  cart[product.id] = [...(cart[product.id] || []), product];

  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('productQuantity', productQuantity);
  callback();
};

export const removeProductById = (id, callback = () => { }) => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const productQuantity = parseInt(localStorage.getItem('productQuantity') || 0, 10)
    - cart[id].length;

  delete cart[id];
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('productQuantity', productQuantity);
  callback();
};

export const removeOneProductById = (id, callback = () => { }) => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const productQuantity = parseInt(localStorage.getItem('productQuantity') || 0, 10) - 1;

  if (cart[id].length === 1) {
    delete cart[id];
  } else {
    cart[id].splice(0, 1);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('productQuantity', productQuantity);
  callback();
};
