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

  //NOW MAKE THIS RETURN CHANGE
  returnChange(amountPaid, amountTotal) {
    let changeGiven = amountPaid - amountTotal;
    let changeObject = {};
    Object.entries(this.coins).forEach(([key, value]) => {
      let numberOfOccurences = Math.floor(changeGiven / value.value);
      if (value.stock > 1) {
        value.stock -= numberOfOccurences;
        changeGiven -= numberOfOccurences * value.value;
        // console.log(value.stock);
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
    return changeArray.join(" ");
  }

  chooseProduct(product, amountInserted) {
    if (
      amountInserted == this.products[product].price &&
      this.products[product].stock > 0
    ) {
      this.products[product].stock -= 1;
      return `Here is your ${product}, there is now ${
        this.products[product].stock
      } left.`;
    } else if (
      amountInserted > this.products[product].price &&
      this.products[product].stock > 0
    ) {
      this.products[product].stock -= 1;
      let changeAmount = amountInserted - this.products[product].price;
      return `Here is your ${product} and your change is ${changeAmount}, there is now ${
        this.products[product].stock
      } left.`;
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
