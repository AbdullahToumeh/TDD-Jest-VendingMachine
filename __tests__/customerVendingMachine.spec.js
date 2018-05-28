const customerVendingMachine = require("../lib/vendingMachine");
const products = require("../__mocks__/inventory-data");
const coins = require("../__mocks__/coins-data");
const coinBank = require("../__mocks__/coin-bank");

let Machine = new customerVendingMachine(products, coins, coinBank);

describe("customerVendingMachine", () => {
  describe("when coins are inserted via coinInsert, and product is chosen with master chooseProductVM", () => {
    it("should return Product with change with coinbank stock cleared", () => {
      const result = Machine.coinInsert("Quarter");
      const result2 = Machine.coinInsert("Toonie");
      const result3 = Machine.chooseProductVM(products.Beer.name);
      expect(result3).toBe(
        "Here is your Beer. Your change is Quarter:3. There is now 4 left. Thank you."
      );
    });
  });
  describe("when coinBank is called after master chooseProductVM is used", () => {
    it("should return stock 0 for all coin bank", () => {
      expect(Machine.getCoinBank()).toBe(coinBank);
    });
  });
});
