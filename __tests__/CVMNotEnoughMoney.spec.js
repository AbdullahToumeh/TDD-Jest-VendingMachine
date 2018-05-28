const customerVendingMachine = require("../lib/vendingMachine");
const products = require("../__mocks__/inventory-data");
const coins = require("../__mocks__/coins-data");
const coinBank = require("../__mocks__/coin-bank");

let Machine = new customerVendingMachine(products, coins, coinBank);

describe("customerVendingMachine", () => {
  describe("when not enough coins are inserted via coinInsert, and product is chosen with master chooseProductVM", () => {
    it("should return the amount needed for the product", () => {
      const result1 = Machine.coinInsert("Nickel");
      const result2 = Machine.coinInsert("Loonie");
      const result3 = Machine.chooseProductVM(products.Beer.name);
      expect(result3).toBe("You do not have enough money, please put in 0.45");
    });
  });
  describe("when enough coins are inserted via coinInsert, and product is not available but is chosen with master chooseProductVM", () => {
    it("should product is not in stock", () => {
      const result1 = Machine.coinInsert("Loonie");
      const result2 = Machine.coinInsert("Loonie");
      const result3 = Machine.chooseProductVM(products.Vodka.name);
      expect(result3).toBe(
        "There is no more stock left, please pick another product"
      );
    });
  });
  describe("when coinBank is called after master chooseProductVM is used", () => {
    it("should return stock 0 for all coin bank", () => {
      expect(Machine.getCoinBank()).toBe("coinBank");
    });
  });
  describe("when getCoins is called after master chooseProductVM is used", () => {
    it("should updated stock for coins taking away the change the machine dispenses", () => {
      expect(Machine.getCoins()).toBe("coins");
    });
  });
});
