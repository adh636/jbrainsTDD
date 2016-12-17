import {Fraction} from "../src/jbrains";
describe("jbrains tdd course", () => {

    describe("add fractions", () => {

        it("should do zero plus zero", () => {
            let sum: Fraction = new Fraction(0).plus(new Fraction(0));
            expect(sum.intValue()).toEqual(0);
        });

        it("should do non zero plus zero", () => {
            let sum: Fraction = new Fraction(3).plus(new Fraction(0));
            expect(sum.intValue()).toEqual(3);
        });

        it("should do zero plus non zero", () => {
            let sum: Fraction = new Fraction(0).plus(new Fraction(5));
            expect(sum.intValue()).toEqual(5);
        });

        it("should do zero plus non zero", () => {
            let sum: Fraction = new Fraction(0).plus(new Fraction(5));
            expect(sum.intValue()).toEqual(5);
        });

        it("should do non zero plus non zero", () => {
            let sum: Fraction = new Fraction(4).plus(new Fraction(5));
            expect(sum.intValue()).toEqual(9);
        });

        it("should do negative plus positive and return negative", () => {
            let sum: Fraction = new Fraction(4).plus(new Fraction(-5));
            expect(sum.intValue()).toEqual(-1);
        });

        it("should do non trivial but common denominator", () => {
            let sum: Fraction = new Fraction(1, 5).plus(new Fraction(2, 5));
            expect(sum.getNumerator()).toEqual(3);
            expect(sum.getDenominator()).toEqual(5);
        });

        it("should do non trivial but common denominator", () => {
            let sum: Fraction = new Fraction(1, 5).plus(new Fraction(2, 5));
            expect(sum.getNumerator()).toEqual(3);
            expect(sum.getDenominator()).toEqual(5);
        });

        it("should add with 2 different denominator without reducing", () => {
            expect(new Fraction(1, 2).plus(new Fraction(1, 3))).toEqual(new Fraction(5, 6));
        });

    });

    describe("fraction equals", () => {

        it("should equal when same numerator and denominator", () => {
            expect(new Fraction(3, 5).toString()).toEqual(new Fraction(3, 5).toString());
        });

        it("should use equal method and return true when same numerator and denominator", () => {
            expect(new Fraction(3, 5).equals(new Fraction(3, 5))).toBeTruthy();
        });

        it("should have equal return false with different numerators or denominators", () => {
            expect(new Fraction(3, 5).equals(new Fraction(3, 4))).toBeFalsy();
            expect(new Fraction(4, 5).equals(new Fraction(3, 5))).toBeFalsy();
        });

        it("should have equal return true when comparing whole number and fraction", () => {
            expect(new Fraction(5, 1).equals(new Fraction(5))).toBeTruthy();
        });

    });

    describe("reduce fractions", () => {

        it("should not reduce fractions in lowest terms", () => {
            expect(new Fraction(3, 4)).toEqual(new Fraction(3, 4));
        });

        it("should reduce fractions to not whole number", () => {
            expect(new Fraction(3, 4)).toEqual(new Fraction(6, 8));
        });

    });

    describe("greatest common divisor", () => {

        it("should reduce reflexive", () => {
            expect(new Fraction(1).gcd(1, 1)).toEqual(1);
            expect(new Fraction(1).gcd(2, 2)).toEqual(2);
        });

        it("should reduce relatively prime", () => {
            expect(new Fraction(1).gcd(2, 3)).toEqual(1);
            expect(new Fraction(1).gcd(5, 7)).toEqual(1);
        });

        it("should reduce when one multiple of the other", () => {
            expect(new Fraction(1).gcd(3, 9)).toEqual(3);
            expect(new Fraction(1).gcd(5, 25)).toEqual(5);
        });

        it("should reduce common factor", () => {
            expect(new Fraction(1).gcd(6, 8)).toEqual(2);
            expect(new Fraction(1).gcd(49, 315)).toEqual(7);
            expect(new Fraction(1).gcd(-24, -36)).toEqual(12);
            expect(new Fraction(1).gcd(-24, 28)).toEqual(4);
        });

    });

});