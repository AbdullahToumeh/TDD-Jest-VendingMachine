const customerVendingMachine = require("../lib/vendingMachine");
const products = require("../__mocks__/inventory-data");
const coins = require("../__mocks__/coins-data");

let Machine = new customerVendingMachine(products, coins);

describe("customerVendingMachine", () => {
  describe("when chooseProduct is called for product with stock with more amountInsterted to price", () => {
    it("should return Product with change", () => {
      const result = Machine.chooseProduct(products.Orange.name, 2.5);
      const result1 = Machine.returnChange(1.8, 1.5);
      const result2 = Machine.getProductSpecificStock("Orange");
      expect(result).toBe("Here is your Orange.");
      expect(result1).toBe("Your change is Quarter:1 Nickel:1. Thank you.");
      expect(result2).toBe("There is now 7 left.");
    });
  });
});
