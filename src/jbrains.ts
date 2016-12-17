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

    toString(): string {
        return this.numerator + " / " + this.denominator;
    }

    equals(other: Object): boolean {
        if (other instanceof Fraction) {
            let that: Fraction = <Fraction>other;
            return this.numerator === that.numerator
                && this.denominator === that.denominator;
        }
        return false;
    }
}