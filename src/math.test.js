import {convert, operate} from "./Math";

describe("Test suite for Conversion/Operation Functions", () => {

    describe("Tests for Math Conversions", () => {

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
                hexVal: "42f7147b",
                realVal: 123.54
            }
            expect(convert(input.value, input.format)).toStrictEqual(expectedOutput);
        });

        it("Test Convert Function with Input type Hex", () => {
            let input = {
                value: "42f7147b",
                format: "hex"
            };

            let expectedOutput = {
                binVal: {
                    "exp": 6,
                    "exp_bit": "10000101",
                    "mantissa": "1.9303125",
                    "mantissa_bit": "11101110001010001111011",
                    "sign_bit": "0"
                },
                hexVal: "42f7147b",
                realVal: 123.54000091552734
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
                hexVal: "42f7147b",
                realVal: 123.53999999999999
            }
            expect(convert(input.value, input.format)).toStrictEqual(expectedOutput);
        });

    });

    describe("Tests for Math Operations [add, subtract, multiply", () => {

        describe("Tests for `add` Operation", () => {
            it("Test Operation Addition with Input type Float", () => {
                let input = {
                    value1: 100.00,
                    value2: 123.54,
                    operation: "add",
                    format: "float"
                };

                let expectedOutput = {
                    binVal: {
                        "exp": 7,
                        "exp_bit": "10000110",
                        "mantissa": "1.7464062",
                        "mantissa_bit": "10111111000101000111101",
                        "sign_bit": "0"
                    },
                    hexVal: "435f8a3d",
                    realVal: 223.54000000000002
                }
                expect(operate(input.value1, input.value2, input.operation, input.format)).toStrictEqual(expectedOutput);
            });

            it("Test Operation Addition with Input type Hex", () => {
                let input = {
                    value1: "42f7147b",
                    value2: "42c80000",
                    operation: "add",
                    format: "hex"
                };

                let expectedOutput = {
                    binVal: {
                        "exp": 7,
                        "exp_bit": "10000110",
                        "mantissa": "1.7464063",
                        "mantissa_bit": "10111111000101000111110",
                        "sign_bit": "0"
                    },
                    hexVal: "435f8a3e",
                    realVal: 223.54000091552734
                }
                expect(operate(input.value1, input.value2, input.operation, input.format)).toStrictEqual(expectedOutput);
            });

            it("Test Operate Function for addition with Input type ieee754", () => {
                let input = {
                    value1: "0|133|0.9303125",
                    value2: "0|133|0.5625000",
                    operation: "add",
                    format: "ieee754"
                };

                let expectedOutput = {
                    binVal: {
                        "exp": 7,
                        "exp_bit": "10000110",
                        "mantissa": "1.7464062",
                        "mantissa_bit": "10111111000101000111101",
                        "sign_bit": "0"
                    },
                    hexVal: "435f8a3d",
                    realVal: 223.54
                }
                expect(operate(input.value1, input.value2, input.operation, input.format)).toStrictEqual(expectedOutput);
            });

        });

        describe("Tests for `subtract` Operation", () => {
            it("Test Operation Subtraction with Input type Float", () => {
                let input = {
                    value1: 123.54,
                    value2: 100,
                    operation: "subtract",
                    format: "float"
                };

                let expectedOutput = {
                    binVal: {
                        "exp": 4,
                        "exp_bit": "10000011",
                        "mantissa": "1.4712501",
                        "mantissa_bit": "01111000101000111101100",
                        "sign_bit": "0"
                    },
                    hexVal: "41bc51ec",
                    realVal: 23.540000000000006
                }
                expect(operate(input.value1, input.value2, input.operation, input.format)).toStrictEqual(expectedOutput);
            });

            it("Test Operation Subtraction with Input type Hex", () => {
                let input = {
                    value1: "42f7147b",
                    value2: "42c80000",
                    operation: "subtract",
                    format: "hex"
                };

                let expectedOutput = {
                    binVal: {
                        "exp": 4,
                        "exp_bit": "10000011",
                        "mantissa": "1.4712501",
                        "mantissa_bit": "01111000101000111101100",
                        "sign_bit": "0"
                    },
                    hexVal: "41bc51ec",
                    realVal: 23.540000915527344
                }
                expect(operate(input.value1, input.value2, input.operation, input.format)).toStrictEqual(expectedOutput);
            });

            it("Test Operate Function for subtraction with Input type ieee754", () => {
                let input = {
                    value1: "0|133|0.9303125",
                    value2: "0|133|0.5625000",
                    operation: "subtract",
                    format: "ieee754"
                };

                let expectedOutput = {
                    binVal: {
                        "exp": 4,
                        "exp_bit": "10000011",
                        "mantissa": "1.4712501",
                        "mantissa_bit": "01111000101000111101100",
                        "sign_bit": "0"
                    },
                    hexVal: "41bc51ec",
                    realVal: 23.539999999999992
                }
                expect(operate(input.value1, input.value2, input.operation, input.format)).toStrictEqual(expectedOutput);
            });

        });

        describe("Tests for `Multiply` Operation", () => {
            it("Test Operation Multiply with Input type Float", () => {
                let input = {
                    value1: 123.54,
                    value2: 100,
                    operation: "multiply",
                    format: "float"
                };

                let expectedOutput = {
                    binVal: {
                        "exp": 13,
                        "exp_bit": "10001100",
                        "mantissa": "1.5080566",
                        "mantissa_bit": "10000010000100000000000",
                        "sign_bit": "0"
                    },
                    hexVal: "46410800",
                    realVal: 12354
                }
                expect(operate(input.value1, input.value2, input.operation, input.format)).toStrictEqual(expectedOutput);
            });

            it("Test Operation Multiply with Input type Hex", () => {
                let input = {
                    value1: "42f7147b",
                    value2: "42c80000",
                    operation: "multiply",
                    format: "hex"
                };

                let expectedOutput = {
                    binVal: {
                        "exp": 13,
                        "exp_bit": "10001100",
                        "mantissa": "1.5080566",
                        "mantissa_bit": "10000010000100000000000",
                        "sign_bit": "0"
                    },
                    hexVal: "46410800",
                    realVal: 12354.000091552734
                }
                expect(operate(input.value1, input.value2, input.operation, input.format)).toStrictEqual(expectedOutput);
            });

            it("Test Operate Function for Multiplication with Input type ieee754", () => {
                let input = {
                    value1: "0|133|0.9303125",
                    value2: "0|133|0.5625000",
                    operation: "multiply",
                    format: "ieee754"
                };

                let expectedOutput = {
                    binVal: {
                        "exp": 13,
                        "exp_bit": "10001100",
                        "mantissa": "1.5080566",
                        "mantissa_bit": "10000010000100000000000",
                        "sign_bit": "0"
                    },
                    hexVal: "46410800",
                    realVal: 12354
                }
                expect(operate(input.value1, input.value2, input.operation, input.format)).toStrictEqual(expectedOutput);
            });

        });

    });
});
