import {convert} from "./Math";

describe("Tests for Math Operations", () => {

    it("Test Convert Function with Input type Float", () => {
        let input = {
            value: 123.54,
            format: "float"
        };

        let expectedOutput = {
            binVal: {
                "exp": 6,
                "exp_bit": "10000101",
                "mantissa": "1.9303125",
                "mantissa_bit": "11101110001010001111011",
                "sign_bit": "0"
            },
            hexVal: "42f7147a",
            realVal: 123.54
        }
        expect(convert(input.value, input.format)).toStrictEqual(expectedOutput);
    });

    it("Test Convert Function with Input type Hex", () => {
        let input = {
            value: "42f7147a",
            format: "hex"
        };

        let expectedOutput = {
            binVal: {
                "exp": 6,
                "exp_bit": "10000101",
                "mantissa": "1.9303124",
                "mantissa_bit": "11101110001010001111010",
                "sign_bit": "0"
            },
            hexVal: "42f7147a",
            realVal: 123.53999328613281
        }
        expect(convert(input.value, input.format)).toStrictEqual(expectedOutput);
    });

    it("Test Convert Function with Input type ieee754", () => {
        let input = {
            value: "0|133|0.9303125",
            format: "ieee754"
        };

        let expectedOutput = {
            binVal: {
                "exp": 6,
                "exp_bit": "10000101",
                "mantissa": "1.9303125",
                "mantissa_bit": "11101110001010001111011",
                "sign_bit": "0"
            },
            hexVal: "42f7147a",
            realVal: 123.53999999999999
        }
        expect(convert(input.value, input.format)).toStrictEqual(expectedOutput);
    });

});