module.exports = class vendingMachine {
  constructor(products) {
    this.products = products;
  }
  getProducts() {
    return this.products;
  }
  stockUp(product, amount) {
    let stockAvailable = this.products[product].stock;
    if (stockAvailable < 5) {
      return (this.products[product].stock += amount);
    } else {
      return `There is ${stockAvailable} left and it does not need to be restocked.`;
    }
  }
};
