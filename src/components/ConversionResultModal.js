const ConversionResultModal = ({realVal, binVal, hexVal}) => {
    return (
        <div className="output">
            <div className="outputformat form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="decimal">Float</label>
                <div className="col-sm-8">
                    <input id="decimal" placeholder="decimal" className="form-control " value={realVal} type="text" disabled />
                </div>
            </div>
            <div className="row form-group justify-content-left p-3 align-items-center border border-info rounded">
                <label className="col-sm-2 col-form-label" htmlFor="float">IEEE-754</label>
                <div className="ieee754 col-sm-10">
                    <div className="d-flex justify-content-around p-1">
                        <input id="sign" placeholder="sign" className="form-control" value={binVal ? ((binVal['sign_bit'] === "1") ? "-1" : "+1") : ""} type="text" disabled />
                        <input id="exponent" placeholder="biased exponent (exp-127)" className="form-control mx-2" value={binVal ? binVal['exp'] : ""} type="text" disabled />
                        <input id="mantissa" placeholder="(1+fraction)" className="form-control" value={binVal ? binVal['mantissa'] : ''} type="text" disabled />
                    </div>
                    <div className="d-flex justify-content-around p-1">
                        <input id="sign bit" placeholder="sign (binary)" className="form-control" value={binVal ? binVal['sign_bit'] : ''} type="text" disabled />
                        <input id="exponent bits" placeholder="exponent (binary)" className="form-control mx-2" value={binVal ? binVal['exp_bit'] : ''} type="text" disabled />
                        <input id="mantissa bits" placeholder="mantissa (binary)" className="form-control" value={binVal ? binVal['mantissa_bit'] : ''} type="text" disabled />
                    </div>
                    <div className="d-flex justify-content-around p-1">
                        <input id="sign-encode" placeholder="sign (Encoded as)" className="form-control" value={binVal ? binVal['sign_bit'] : ''} type="text" disabled />
                        <input id="exponent-encode" placeholder="exponent (Encoded as)" className="form-control mx-2" value={binVal ? `${parseInt(binVal['exp']) + 127}` : ''} type="text" disabled />
                        <input id="mantissa-encode" placeholder="mantissa (Encoded as)" className="form-control" value={binVal ? `${parseInt(binVal["mantissa_bit"], 2)}` : ""} type="text" disabled />
                    </div>
                </div>
            </div>
            <div className="outputformat form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="hex">Hex</label>
                <div className="col-sm-8">
                    <input id="hex" placeholder="hexadecimal" className="form-control" value={hexVal} type="text" disabled />
                </div>
            </div>
        </div>
    )
}

export {ConversionResultModal};