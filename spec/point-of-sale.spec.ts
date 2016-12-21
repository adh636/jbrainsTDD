import {Display, Sale} from "../src/point-of-sale";

describe("point of sale system", () => {

    describe("should sell one item", () => {

        it("should find product", () => {
            let display: Display = new Display();
            let sale: Sale = new Sale(display);
            sale.onBarcode("12345");
            expect(display.getText()).toEqual("$7.95");
        });

        it("should find a second product", () => {
            let display: Display = new Display();
            let sale: Sale = new Sale(display);
            sale.onBarcode("23456");
            expect(display.getText()).toEqual("$12.50");
        });

        it("should return product not found for barcode 99999", () => {
            let display: Display = new Display();
            let sale: Sale = new Sale(display);
            sale.onBarcode("99999");
            expect(display.getText()).toEqual("Product not found for 99999");
        });
    });
});