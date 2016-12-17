export class Fraction {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator?: number) {
        this.numerator = numerator;
        this.denominator = denominator ? denominator : 1;
    }

    plus(that: Fraction): Fraction {
        return new Fraction(this.getNumerator() + that.getNumerator(), this.getDenominator()) ;
    }

    intValue(): number {
        return this.numerator;
    }

    getNumerator(): number {
        return this.numerator;
    }

    getDenominator(): number {
        return this.denominator;
    }
}