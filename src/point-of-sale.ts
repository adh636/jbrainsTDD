export class Display {
    private text;

    getText() {
        return this.text;
    }

    setText(text: string) {
        this.text = text;
    }
}

export class Sale {
    private display: Display;
    lookupTable: any;


    constructor(display: Display, lookupTable: any) {
        this.display = display;
        this.lookupTable = lookupTable;
    }

    onBarcode(barcode: string) {
        if (barcode === "") {
            this.displayEmptyBarcodeMessage();
            return;
        }
        if (this.lookupTable[barcode]) this.displayPrice(barcode);
        else this.displayProductNotFoundMessage(barcode);
    }

    private displayProductNotFoundMessage(barcode: string) {
        this.display.setText("Product not found for " + barcode);
    }

    private displayPrice(barcode: string) {
        this.display.setText(this.lookupTable[barcode]);
    }

    private displayEmptyBarcodeMessage() {
        this.display.setText("Scanning error: empty barcode");
    }
}