// Object property shorthand

const name = 'Davin';
const userAge = 30;

const user = {
  name,
  age: userAge,
  location: 'Miami',
};

console.log(user);

// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 5,
};

// const label = product.label;
// const stock = product.stock;

// const { label: productLabel, stock, rating = 10 } = product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (
  type = 'order type',
  { label = 'label', stock = 0 } = {}
) => {
  console.log(`${type} - ${label} - ${stock}`);
};

// transaction('order', product);
transaction();
