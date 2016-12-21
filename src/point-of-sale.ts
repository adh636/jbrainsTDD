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

    constructor(display: Display) {
        this.display = display;
    }

    onBarcode(barcode: string) {
        if (barcode === "12345") this.display.setText("$7.95");
        else if (barcode === "23456") this.display.setText("$12.50");
        else this.display.setText("Product not found for " + barcode);
    }
}