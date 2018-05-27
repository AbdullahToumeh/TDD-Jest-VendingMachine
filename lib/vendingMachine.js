module.exports = class vendingMachine {
  constructor(products, coins) {
    this.products = products;
    this.coins = coins;
  }
  getProductSpecificStock(product) {
    return `There is now ${this.products[product].stock} left.`;
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
  stockUpAllProducts(amount) {
    let lengthObject = Object.keys(this.products).length;
    for (let i = 0; i < lengthObject; i++) {
      Object.values(this.products)[i].stock += amount;
    }
    return this.products;
  }
  stockUpAllLowProducts(amount) {
    let lengthObject = Object.keys(this.products).length;
    for (let i = 0; i < lengthObject; i++) {
      if (Object.values(this.products)[i].stock < 5) {
        Object.values(this.products)[i].stock += amount;
      }
    }
    return this.products;
  }

  getCoins() {
    return this.coins;
  }
  getCoinsSpecificStock(coin) {
    return `There is now ${this.coins[coin].stock} left.`;
  }
  stockUpCoins(coin, amount) {
    let stockAvailable = this.coins[coin].stock;
    if (stockAvailable < 20) {
      return (this.coins[coin].stock += amount);
    } else {
      return `There is ${stockAvailable} left and it does not need to be restocked.`;
    }
  }

  stockUpAllCoins(amount) {
    let lengthObject = Object.keys(this.coins).length;
    for (let i = 0; i < lengthObject; i++) {
      Object.values(this.coins)[i].stock += amount;
    }
    return this.coins;
  }

  stockUpAllLowCoins(amount) {
    let lengthObject = Object.keys(this.coins).length;
    for (let i = 0; i < lengthObject; i++) {
      if (Object.values(this.coins)[i].stock < 20) {
        Object.values(this.coins)[i].stock += amount;
      }
    }
    console.log(this.coins);
    return this.coins;
  }
  returnChange(amountPaid, amountTotal) {
    let changeGiven = amountPaid - amountTotal;
    let changeObject = {};
    Object.entries(this.coins).forEach(([key, value]) => {
      let numberOfOccurences = Math.floor(changeGiven / value.value);
      if (value.stock > 1) {
        value.stock -= numberOfOccurences;
        changeGiven -= numberOfOccurences * value.value;
        if (numberOfOccurences) {
          changeObject = Object.assign(changeObject, {
            [key]: numberOfOccurences
          });
        }
      }
    });
    let newObject = Object.entries(changeObject);
    let changeArray = [];
    newObject.map((letters, index) => {
      changeArray.push(letters.join(":"));
    });
    return `Your change is ${changeArray.join(" ")}. Thank you.`;
  }

  chooseProduct(product, amountInserted) {
    if (
      amountInserted == this.products[product].price &&
      this.products[product].stock > 0
    ) {
      this.products[product].stock -= 1;
      return `Here is your ${product}.`;
    } else if (
      amountInserted > this.products[product].price &&
      this.products[product].stock > 0
    ) {
      this.products[product].stock -= 1;
      let changeAmount = amountInserted - this.products[product].price;
      return `Here is your ${product}.`;
    } else if (
      amountInserted >= this.products[product].price &&
      this.products[product].stock == 0
    ) {
      return `There is no more stock left, please pick another product`;
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
