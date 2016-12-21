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
        if (barcode === "") this.display.setText("Scanning error: empty barcode");
        else if (this.lookupTable[barcode]) this.display.setText(this.lookupTable[barcode]);
        else this.display.setText("Product not found for " + barcode);
    }
}