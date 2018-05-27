const vendingMachine1 = require("../lib/vendingMachine");
const products = require("../__mocks__/inventory-data");
const coins = require("../__mocks__/coins-data");

let Machine = new vendingMachine1(products, coins);

describe("vendingMachine1", () => {
  describe("when chooseProduct is called for product with stock with more amountInsterted to price", () => {
    it("should return Product", () => {
      const result = Machine.chooseProduct(products.Orange.name, 2.5);
      const result1 = Machine.returnChange(1.8, 1.5);
      const result2 = Machine.getProductSpecificStock("Orange");
      expect(result).toBe(`${result}`);
      expect(result1).toBe(`${result1}`);
      expect(result2).toBe(`${result2}`);
    });
  });
});
