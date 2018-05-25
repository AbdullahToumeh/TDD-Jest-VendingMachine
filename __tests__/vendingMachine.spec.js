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
});
