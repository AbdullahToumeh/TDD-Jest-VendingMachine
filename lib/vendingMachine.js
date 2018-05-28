module.exports = class vendingMachine {
  constructor(products, coins, coinBank) {
    this.products = products;
    this.coins = coins;
    this.coinBank = coinBank;
  }
  //get coin bank info
  getCoinBank() {
    return this.coinBank;
  }
  //insert coins for ultimate vending machine
  coinInsert(coin) {
    if (coin == this.coinBank[coin].name) {
      this.coinBank[coin].stock += 1;
      this.coins[coin].stock += 1;
    }
  }
  //get specific product
  getProductSpecificStock(product) {
    return `There is now ${this.products[product].stock} left.`;
  }
  //get all products
  getProducts() {
    return this.products;
  }
  //stock up specific product based on product and amount
  stockUpProducts(product, amount) {
    let stockAvailable = this.products[product].stock;
    if (stockAvailable < 5) {
      return (this.products[product].stock += amount);
    } else {
      return `There is ${stockAvailable} left and it does not need to be restocked.`;
    }
  }
  //stock up all proucts based on amount
  stockUpAllProducts(amount) {
    let lengthObject = Object.keys(this.products).length;
    for (let i = 0; i < lengthObject; i++) {
      Object.values(this.products)[i].stock += amount;
    }
    return this.products;
  }
  //stock up all low products based on amount
  stockUpAllLowProducts(amount) {
    let lengthObject = Object.keys(this.products).length;
    for (let i = 0; i < lengthObject; i++) {
      if (Object.values(this.products)[i].stock < 5) {
        Object.values(this.products)[i].stock += amount;
      }
    }
    return this.products;
  }
  //unstock based on product and amount
  unStockProducts(product, amount) {
    let stockAvailable = this.products[product].stock;
    if (stockAvailable > 0) {
      return (this.products[product].stock -= amount);
    } else {
      return `There is ${stockAvailable} left and it cannot be unstocked.`;
    }
  }
  //get all coins info
  getCoins() {
    return this.coins;
  }
  //get specific coin info
  getCoinsSpecificStock(coin) {
    return `There is now ${this.coins[coin].stock} left.`;
  }
  //stock up specific coin
  stockUpCoins(coin, amount) {
    let stockAvailable = this.coins[coin].stock;
    if (stockAvailable < 20) {
      return (this.coins[coin].stock += amount);
    } else {
      return `There is ${stockAvailable} left and it does not need to be restocked.`;
    }
  }
  //stock up all coins based on amount
  stockUpAllCoins(amount) {
    let lengthObject = Object.keys(this.coins).length;
    for (let i = 0; i < lengthObject; i++) {
      Object.values(this.coins)[i].stock += amount;
    }
    return this.coins;
  }
  //stock up all low coins based on amount
  stockUpAllLowCoins(amount) {
    let lengthObject = Object.keys(this.coins).length;
    for (let i = 0; i < lengthObject; i++) {
      if (Object.values(this.coins)[i].stock < 20) {
        Object.values(this.coins)[i].stock += amount;
      }
    }
    return this.coins;
  }
  //unstock based on coin and based on amount
  unStockCoins(coin, amount) {
    let stockAvailable = this.coins[coin].stock;
    if (stockAvailable > 0) {
      return (this.coins[coin].stock -= amount);
    } else {
      return `There is ${stockAvailable} left and it cannot be unstocked.`;
    }
  }
  //regular return change without coins
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
  //regular choose product without coins
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
  //included coins, stock, coins refresh
  //ULTIMATE FUNCTION FOR VENDING MACHINE
  chooseProductVM(product) {
    //making amountInserted based on coins
    let coinBankValues = Object.values(this.coinBank);
    let valueArray = [];
    coinBankValues.map((coin, index) => {
      valueArray.push(coin.stock * coin.value);
    });
    function getSum(total, num) {
      return total + num;
    }
    let amountInserted = valueArray.reduce(getSum);
    //if amountInserted is exact
    if (
      amountInserted == this.products[product].price &&
      this.products[product].stock > 0
    ) {
      this.products[product].stock -= 1;
      let lengthObject = Object.keys(this.coinBank).length;
      for (let i = 0; i < lengthObject; i++) {
        Object.values(this.coinBank)[i].stock = 0;
      }
      return `Here is your ${product}.`;
      //if amountInserted needs change
    } else if (
      amountInserted > this.products[product].price &&
      this.products[product].stock > 0
    ) {
      this.products[product].stock -= 1;
      let changeObject = {};
      let changeAmount = amountInserted - this.products[product].price;
      Object.entries(this.coins).forEach(([key, value]) => {
        let numberOfOccurences = Math.floor(changeAmount / value.value);
        if (value.stock > 1) {
          value.stock -= numberOfOccurences;
          changeAmount -= numberOfOccurences * value.value;
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
      let lengthObject = Object.keys(this.coinBank).length;
      for (let i = 0; i < lengthObject; i++) {
        Object.values(this.coinBank)[i].stock = 0;
      }
      return `Here is your ${product}. Your change is ${changeArray.join(
        " "
      )}. There is now ${this.products[product].stock} left. Thank you.`;
      //if there is no more stock
    } else if (
      amountInserted >= this.products[product].price &&
      this.products[product].stock == 0
    ) {
      return `There is no more stock left, please pick another product`;
      //if there amount inserted is not enough
    } else if (
      amountInserted < this.products[product].price &&
      this.products[product].stock > 0
    ) {
      let amountNeeded = this.products[product].price - amountInserted;
      let amountNeededRounded = amountNeeded.toFixed(2);
      return `You do not have enough money, please put in ${amountNeededRounded}`;
    }
  }
  //dispense change if customer does not want it/not enough money
  dispenseCoinBank() {
    let lengthObject = Object.keys(this.coins).length;
    for (let i = 0; i < lengthObject; i++) {
      Object.values(this.coins)[i].stock -= Object.values(this.coinBank)[
        i
      ].stock;
      Object.values(this.coinBank)[i].stock = 0;
    }
    return `Sorry it didn't work out. Your change has been returned.`;
  }
};
