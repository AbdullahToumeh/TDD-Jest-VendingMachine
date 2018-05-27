const ownerVendingMachine = require("../lib/vendingMachine");
const products = require("../__mocks__/inventory-data");
const coins = require("../__mocks__/coins-data");

let Machine = new ownerVendingMachine(products, coins);

describe("ownerVendingMachine", () => {
  describe("when getProducts is called", () => {
    it("should return all Products", () => {
      const result = Machine.getProducts();
      expect(result).toEqual(products);
    });
  });
  describe("when stockUpAllLowProducts is called", () => {
    it("should stock up all products with less then 5 stock according to amount passed", () => {
      const result = Machine.stockUpAllLowProducts(5);
      expect(result).toEqual(products);
    });
  });
  describe("when stockUpAllLowCoins is called", () => {
    it("should stock up all coins with less then 20 stock according to amount passed", () => {
      const result = Machine.stockUpAllLowCoins(10);
      expect(result).toEqual(coins);
    });
  });
  describe("when unStockProducts is called", () => {
    it("should remove stock according to amount and product passed in", () => {
      const result = Machine.unStockProducts(products.Coke.name, 1);
      expect(result).toEqual(7);
    });
  });
  describe("when unStockCoins is called", () => {
    it("should remove stock according to amount and product passed in", () => {
      const result = Machine.unStockCoins(coins.Dime.name, 1);
      expect(result).toEqual(54);
    });
  });
});
