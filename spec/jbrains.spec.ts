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


    });
});