export class Display {
    private text;

    getText() {
        return this.text;
    }

    setText(text: string) {
        this.text = text;
    }

    displayProductNotFoundMessage(barcode: string) {
        this.setText("Product not found for " + barcode);
    }

    displayPrice(priceAsText: any) {
        this.setText(priceAsText);
    }

    displayEmptyBarcodeMessage() {
        this.setText("Scanning error: empty barcode");
    }
}

export class Sale {
    private display: Display;
    catalog: any;


    constructor(display: Display, catalog: any) {
        this.display = display;
        this.catalog = catalog;
    }

    onBarcode(barcode: string) {
        if (barcode === "") {
            this.display.displayEmptyBarcodeMessage();
            return;
        }
        if (!this.catalog.lookupTable[barcode]) {
            this.display.displayProductNotFoundMessage(barcode)
        }
        else {
            this.display.displayPrice(this.catalog.findPrice(barcode));
        }
    }
}

export class Catalog {
    private lookupTable: any;

    constructor(lookupTable: any) {
        this.lookupTable = lookupTable;
    }

    findPrice(barcode: string) {
        return this.lookupTable[barcode];
    }
}