import { useState } from 'react';
import './Conversion.css';
import { convert } from '../Math';
import {OperationResultModal} from "./OperationResultModal";



const Conversion = () => {
    const [format, setFormat] = useState('float');
    const [realVal, setrealVal] = useState('');
    const [binVal, setbinVal] = useState("");
    const [hexVal, sethexVal] = useState('');
    const [sign, setSign] = useState('');
    const [exp, setExp] = useState('');
    const [mantissa, setMantissa] = useState('');
    const [val, setVal] = useState('');
    const [results, showResults] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        const format = event.target.value;
        setFormat(format);
        setbinVal('');
        sethexVal('');
        setrealVal('');
        setVal('');
        setSign('');
        setExp('');
        setMantissa('');
    }


    const submit = (event) => {
        let value = (format === "ieee754") ? `${sign}|${exp}|${mantissa}` : val;
        let binVal, realVal, hexVal;
        try {
            ({ binVal, realVal, hexVal } = convert(value, format));
            setbinVal(binVal);
            sethexVal(hexVal);
            setrealVal(realVal);
            showResults(true);
            setError('');
        } catch (e) {
            showResults(false);
            setError(e)
            setbinVal('');
            sethexVal('');
            setrealVal('');
        }
    }

    return (
        <div className="home">
            <div className="border border-info p-2 mb-2">
                (-1)<sup>sign  </sup> (1 + fraction) x 2 <sup>exponent - bias</sup>
            </div>
            
            <div className="format">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" checked={format === 'float'} onChange={handleChange} name="input_format" value='float' type="radio" id="float" />
                    <label className="form-check-label" htmlFor="float">Float</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" onChange={handleChange} name="input_format" value='ieee754' type="radio" id="ieee754" />
                    <label className="form-check-label" htmlFor="ieee754">IEEE-754</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" onChange={handleChange} name="input_format" value='hex' type="radio" id="hex" />
                    <label className="form-check-label" htmlFor="hex">Hex</label>
                </div>
            </div>

            {/* Input */}
            <div className="w-75  justify-content-center  d-flex">
                {
                    (format === 'ieee754') ? (
                        <div className="d-flex">
                            <input type="text" onChange={(e) => setSign(e.target.value)} value={sign} placeholder="sign" style={{ flexBasis: '30%' }} className="form-control" />
                            <input type="text" onChange={(e) => setExp(e.target.value)} value={exp} placeholder="exponent(0-255)" className="form-control mx-2" />
                            <input type="text" onChange={(e) => setMantissa(e.target.value)} value={mantissa} placeholder="fraction(0-1)" className="form-control" />
                        </div>
                    ) :
                        (<input type="text" value={val} onChange={(e) => setVal(e.target.value)} style={{ width: '30%' }} placeholder="Enter a value"
                            className="form-control" />)
                }
                <button onClick={submit} type="button" className="btn-custom mx-3">Convert</button>
            </div>
            {/* Output */}
            {/* Output */}
            {results ?
                <OperationResultModal
                    realVal={realVal} binVal={binVal} hexVal={hexVal  }
                /> : <></> }
            {error ?
                <div class='error-container'>
                    <div className = 'error-message'><span className={"error-logo"}>&times; </span>{error}</div>
                </div>: <></>
            }

        </div>
    )
}
export default Conversion;