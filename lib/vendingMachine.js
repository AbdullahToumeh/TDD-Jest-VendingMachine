module.exports = class vendingMachine {
  constructor(products, coins) {
    this.products = products;
    this.coins = coins;
  }
  getProducts() {
    return this.products;
  }
  stockUpProducts(product, amount) {
    let stockAvailable = this.products[product].stock;
    if (stockAvailable < 5) {
      return (this.products[product].stock += amount);
    } else {
      return `There is ${stockAvailable} left and it does not need to be restocked.`;
    }
  }
  getCoins() {
    return this.coins;
  }
  stockUpCoins(coin, amount) {
    let stockAvailable = this.coins[coin].stock;
    if (stockAvailable < 20) {
      return (this.coins[coin].stock += amount);
    } else {
      return `There is ${stockAvailable} left and it does not need to be restocked.`;
    }
  }
  chooseProduct(product, amountInserted) {
    if (
      amountInserted == this.products[product].price &&
      this.products[product].stock > 0
    ) {
      return product;
    } else if (
      amountInserted > this.products[product].price &&
      this.products[product].stock > 0
    ) {
      let changeAmount = amountInserted - this.products[product].price;
      return `${product} and your change is ${changeAmount}`;
    } else if (
      amountInserted >= this.products[product].price &&
      this.products[product].stock == 0
    ) {
      return `There is not more stock left, please pick another product`;
    } else if (
      amountInserted < this.products[product].price &&
      this.products[product].stock > 0
    ) {
      let amountNeeded = this.products[product].price - amountInserted;
      let amountNeededRounded = amountNeeded.toFixed(2);
      return `You do not have enough money, please put in ${amountNeededRounded}`;
    }
  }
};
