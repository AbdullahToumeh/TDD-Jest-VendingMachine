const vendingMachine = require("../lib/vendingMachine");
const products = require("../__mocks__/inventory-data");
const coins = require("../__mocks__/coins-data");

let Machine = new vendingMachine(products, coins);

describe("vendingMachine", () => {
  describe("when getProducts is called", () => {
    it("should return all products", () => {
      const result = Machine.getProducts();
      expect(result).toEqual(products);
    });
  });
  describe("when stockUpProducts is called with a stock of 3", () => {
    it("should return stock up according to the name and amount of stock up", () => {
      const result = Machine.stockUpProducts(products.Coke.name, 10);
      expect(result).toEqual(13);
    });
  });
  describe("when stockUpProducts is called with a stock of 10", () => {
    it("should return There is x left and it does not need to be restocked", () => {
      const result = Machine.stockUpProducts(products.Redbull.name, 10);
      expect(result).toBe(
        "There is 10 left and it does not need to be restocked."
      );
    });
  });
  describe("when getCoins is called", () => {
    it("should return all coins", () => {
      const result = Machine.getCoins();
      expect(result).toEqual(coins);
    });
  });
  describe("when stockUpCoins is called with a stock of 10", () => {
    it("should return stockup according tot he name and amount of stockup", () => {
      const result = Machine.stockUpCoins(coins.Toonie.name, 20);
      expect(result).toEqual(30);
    });
  });
  describe("when stockUpCoins is called with a stock of 41", () => {
    it("should return There is x left and it does not need to be restocked", () => {
      const result = Machine.stockUpCoins(coins.Quarter.name, 20);
      expect(result).toBe(
        "There is 41 left and it does not need to be restocked."
      );
    });
  });
  describe("when chooseProduct is called for product with stock with exact amountInsterted to price", () => {
    it("should return Product", () => {
      const result = Machine.chooseProduct(products.Redbull.name, 2.0);
      expect(result).toBe(
        `Here is your ${products.Redbull.name}, there is now 9 left.`
      );
    });
  });
  describe("when chooseProduct is called for product with stock with more amountInsterted to price", () => {
    it("should return Product + hello", () => {
      const result = Machine.chooseProduct(products.Orange.name, 2.5);
      expect(result).toBe(
        `Here is your ${
          products.Orange.name
        } and your change is 0.75, there is now 7 left.`
      );
    });
  });
  describe("when chooseProduct is called for product without stock with exact amountInsterted to price", () => {
    it("should return There is not more stock left, please pick another product", () => {
      const result = Machine.chooseProduct(products.Vodka.name, 2.5);
      expect(result).toBe(
        "There is not more stock left, please pick another product"
      );
    });
  });
  describe("when chooseProduct is called for product without stock without enough amountInsterted to price", () => {
    it("should return There is not more stock left, please pick another product", () => {
      const result = Machine.chooseProduct(products.Coke.name, 1.5);
      expect(result).toBe("You do not have enough money, please put in 0.25");
    });
  });
});
