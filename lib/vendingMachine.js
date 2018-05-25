module.exports = class vendingMachine {
  constructor(products) {
    this.products = products;
  }
  getProducts() {
    return this.products;
  }
};
