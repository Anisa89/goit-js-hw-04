const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = (allProdcuts, productName) => {
  let totalPrice = 0;
  for (const nameProduct of allProdcuts) {
    if (nameProduct.name === productName) {
      totalPrice = nameProduct.price * nameProduct.quantity;
    }
  }
  return totalPrice;
};

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
