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
    lookupTable: any = {
        "12345": "$7.95",
        "23456": "$12.50"
    };


    constructor(display: Display) {
        this.display = display;
    }

    onBarcode(barcode: string) {
        if (barcode === "") this.display.setText("Scanning error: empty barcode");
        else if (this.lookupTable[barcode]) this.display.setText(this.lookupTable[barcode]);
        else this.display.setText("Product not found for " + barcode);
    }
}