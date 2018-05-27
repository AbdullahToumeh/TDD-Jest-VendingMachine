const notEnough = require("../lib/vendingMachine");
const products = require("../__mocks__/inventory-data");
const coins = require("../__mocks__/coins-data");

let Machine = new notEnough(products, coins);

describe("notEnough", () => {
  describe("when chooseProduct is called for product with not enough stock but enough money", () => {
    it("should return Product with change", () => {
      const result = Machine.chooseProduct(products.Vodka.name, 3.0);
      expect(result).toBe(result);
    });
  });
});
describe("when chooseProduct is called for product with stock without enough amountInsterted to price", () => {
  it("should return There is no more stock left, please pick another product", () => {
    const result = Machine.chooseProduct(products.Coke.name, 1.5);
    expect(result).toBe("You do not have enough money, please put in 0.25");
  });
  //   describe("when stock quarter && dimes are not stocked (quarter:0,dime:1) return change is called", () => {
  //     it("should return change according to totalpaid - itemprice and not use any stock that is less then 1", () => {
  //       const result = Machine.returnChange(2.0, 1.5);
  //       expect(result).toBe("Nickel:10");
  //     });
  //   });
});
