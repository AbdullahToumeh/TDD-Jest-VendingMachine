const vendingMachine = require("../lib/vendingMachine");
const products = require("../__mocks__/inventory-data");

let Machine = new vendingMachine(products);

describe("vendingMachine", () => {
  describe("when getProducts is called", () => {
    it("should return all products", () => {
      const result = Machine.getProducts();
      expect(result).toEqual(products);
    });
  });
  describe("when stockUp is called with a stock of 0", () => {
    it("should return stock up according to the name and amount of stock up", () => {
      const result = Machine.stockUp(products.Vodka.name, 10);
      expect(result).toEqual(10);
    });
  });
  describe("when stockUp is called with a stock of 10", () => {
    it("should return There is x left and it does not need to be restocked", () => {
      const result = Machine.stockUp(products.Redbull.name, 10);
      expect(result).toBe(
        "There is 10 left and it does not need to be restocked."
      );
    });
  });
});
