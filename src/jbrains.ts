export class Fraction {
    value: number;

    constructor(value: number) {
        this.value = value;
    }

    plus(that: Fraction): Fraction {
        return new Fraction(this.intValue() + that.intValue()) ;
    }

    intValue(): number {
        return this.value;
    }
}