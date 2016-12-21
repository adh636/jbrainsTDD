import {Display, Sale, Catalog} from "../src/point-of-sale";

describe("point of sale system", () => {

    describe("should sell one item", () => {
        let lookupTable: Catalog = new Catalog({
            "12345": "$7.95",
            "23456": "$12.50"
        });
        let display: Display;
        let sale: Sale;

        beforeEach(() => {
            display = new Display();
            sale = new Sale(display, lookupTable);
        });

        it("should find product", () => {
            sale.onBarcode("12345");
            expect(display.getText()).toEqual("$7.95");
        });

        it("should find a second product", () => {
            sale.onBarcode("23456");
            expect(display.getText()).toEqual("$12.50");
        });

        it("should return product not found for barcode 99999", () => {
            sale.onBarcode("99999");
            expect(display.getText()).toEqual("Product not found for 99999");
        });

        it("should handle empty barcode", () => {
            sale.onBarcode("");
            expect(display.getText()).toEqual("Scanning error: empty barcode");
        });
    });
});