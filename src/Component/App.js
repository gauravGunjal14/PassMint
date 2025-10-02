import React, { useCallback, useEffect, useState, useRef } from "react";

function App() {
    const [password, setPassword] = useState("🔑Password apper here...");
    const [length, setLength] = useState(16);

    const [mode, setMode] = useState("");

    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);

    const copyBtnRef = useRef(null);
    const containerRef = useRef(null)

    useEffect(() => {
        if (mode === "easy") {
            setIncludeUppercase(true);
            setIncludeLowercase(true);
            setIncludeNumbers(false);
            setIncludeSymbols(false);
        } else if (mode === "moderate") {
            setIncludeUppercase(true);
            setIncludeLowercase(true);
            setIncludeNumbers(true);
            setIncludeSymbols(false);
        } else if (mode === "hard") {
            setIncludeUppercase(true);
            setIncludeLowercase(true);
            setIncludeNumbers(true);
            setIncludeSymbols(true);
        }
    }, [mode]);

    function copyPassword() {
        navigator.clipboard.writeText(password).catch((err) => {
            console.error("Copy failed", err);
        });
    }

    const generatePassword = useCallback(() => {
        if (copyBtnRef.current) copyBtnRef.current.style.display = "flex";

        let password = "";
        let str = "";

        if (includeUppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLowercase) str += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) str += "0123456789";
        if (includeSymbols) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        if (str.length === 0) {
            password = "❌Please select at least one option.";
        } else {
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * str.length);
                password += str[randomIndex];
            }
        }

        setPassword(password);
    }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

    return (
        <div className="container" id="container">
            <a href="https://github.com/gauravGunjal14/PassMint" target="_blank" className="git-repo">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#181717" d="M24,4C12.954,4,4,12.954,4,24c0,8.837,5.711,16.348,13.659,19.022c1.001,0.183,1.366-0.434,1.366-0.964c0-0.475-0.017-1.732-0.026-3.403c-5.552,1.207-6.718-2.674-6.718-2.674c-0.91-2.313-2.222-2.928-2.222-2.928c-1.816-1.241,0.138-1.216,0.138-1.216c2.007,0.141,3.062,2.061,3.062,2.061c1.784,3.055,4.677,2.172,5.82,1.661c0.181-1.291,0.698-2.172,1.27-2.671c-4.436-0.505-9.11-2.218-9.11-9.872c0-2.179,0.779-3.959,2.059-5.352c-0.207-0.506-0.893-2.539,0.197-5.292c0,0,1.68-0.538,5.5,2.051c1.596-0.444,3.306-0.666,5.008-0.674c1.7,0.008,3.41,0.23,5.008,0.674c3.818-2.589,5.496-2.051,5.496-2.051c1.092,2.753,0.406,4.786,0.199,5.292c1.282,1.393,2.057,3.173,2.057,5.352c0,7.667-4.68,9.362-9.133,9.852c0.719,0.619,1.36,1.838,1.36,3.707c0,2.676-0.025,4.835-0.025,5.493c0,0.534,0.36,1.152,1.375,0.956C38.291,40.344,44,32.837,44,24C44,12.954,35.046,4,24,4z"></path>
                </svg>Star Project</a>
            <div className="container1">
                <div className="password-display">
                    <h1 className="show_password">{password}</h1>
                    <button ref={copyBtnRef} className="copyBtn" onClick={copyPassword}>📃</button>
                </div>

                <div className="customizer">
                    <h2>Customize your Password:</h2>
                    <p className="passLenHeader">Password Length: {length}</p>

                    <div className="password-length">
                        <input className="num_length" type="number" min={1} max={50} value={length}
                            onChange={(e) => {
                                let val = +e.target.value;
                                if (val < 1) val = 1;
                                else if (val > 50) val = 50;
                                setLength(val);
                            }}
                        />

                        <input className="num_range" type="range" min={1} max={50} value={length}
                            onChange={(e) => setLength(+e.target.value)}
                        />
                    </div>

                    <div className="option1">
                        <div className="easy checkbox">
                            <input type="checkbox" id="easy" checked={mode === "easy"}
                                onChange={() => setMode(mode === "easy" ? "" : "easy")}
                            />
                            <label htmlFor="easy">Easy</label>
                        </div>

                        <div className="moderate checkbox">
                            <input type="checkbox" id="moderate" checked={mode === "moderate"}
                                onChange={() => setMode(mode === "moderate" ? "" : "moderate")}
                            />
                            <label htmlFor="moderate">Moderate</label>
                        </div>

                        <div className="hard checkbox">
                            <input type="checkbox" id="hard" checked={mode === "hard"}
                                onChange={() => setMode(mode === "hard" ? "" : "hard")}
                            />
                            <label htmlFor="hard">Hard</label>
                        </div>
                    </div>

                    <div className="option2">
                        <div className="uppercase checkbox">
                            <input type="checkbox" id="uppercase" checked={includeUppercase} disabled={mode !== ""}
                                onChange={() => setIncludeUppercase(!includeUppercase)}
                            />
                            <label htmlFor="uppercase">Uppercase</label>
                        </div>

                        <div className="lowercase checkbox">
                            <input type="checkbox" id="lowercase" checked={includeLowercase} disabled={mode !== ""}
                                onChange={() => setIncludeLowercase(!includeLowercase)}
                            />
                            <label htmlFor="lowercase">Lowercase</label>
                        </div>

                        <div className="numbers checkbox">
                            <input type="checkbox" id="numbers" checked={includeNumbers} disabled={mode !== ""}
                                onChange={() => setIncludeNumbers(!includeNumbers)}
                            />
                            <label htmlFor="numbers">Numbers</label>
                        </div>

                        <div className="symbols checkbox">
                            <input type="checkbox" id="symbols" checked={includeSymbols} disabled={mode !== ""}
                                onChange={() => setIncludeSymbols(!includeSymbols)}
                            />
                            <label htmlFor="symbols">Symbols</label>
                        </div>
                    </div>

                    <div className="generate">
                        <div className="findMe">
                            <p>Find me on:</p>
                            <div className="links">
                                <a href="https://www.linkedin.com/in/gaurav-gunjal14" target="_blank" className="icons">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                                        <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                    </svg>
                                </a>
                                <a href="https://github.com/gauravGunjal14" target="_blank" className="icons">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                                        <path fill="#181717" d="M24,4C12.954,4,4,12.954,4,24c0,8.837,5.711,16.348,13.659,19.022c1.001,0.183,1.366-0.434,1.366-0.964c0-0.475-0.017-1.732-0.026-3.403c-5.552,1.207-6.718-2.674-6.718-2.674c-0.91-2.313-2.222-2.928-2.222-2.928c-1.816-1.241,0.138-1.216,0.138-1.216c2.007,0.141,3.062,2.061,3.062,2.061c1.784,3.055,4.677,2.172,5.82,1.661c0.181-1.291,0.698-2.172,1.27-2.671c-4.436-0.505-9.11-2.218-9.11-9.872c0-2.179,0.779-3.959,2.059-5.352c-0.207-0.506-0.893-2.539,0.197-5.292c0,0,1.68-0.538,5.5,2.051c1.596-0.444,3.306-0.666,5.008-0.674c1.7,0.008,3.41,0.23,5.008,0.674c3.818-2.589,5.496-2.051,5.496-2.051c1.092,2.753,0.406,4.786,0.199,5.292c1.282,1.393,2.057,3.173,2.057,5.352c0,7.667-4.68,9.362-9.133,9.852c0.719,0.619,1.36,1.838,1.36,3.707c0,2.676-0.025,4.835-0.025,5.493c0,0.534,0.36,1.152,1.375,0.956C38.291,40.344,44,32.837,44,24C44,12.954,35.046,4,24,4z"></path>
                                    </svg>
                                </a>
                                <a href="https://x.com/gaurav_gunjal14" target="_blank" className="icons">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                                        <path fill="#212121" fillRule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clipRule="evenodd"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <button className="generateBtn" onClick={generatePassword}>Generate Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
