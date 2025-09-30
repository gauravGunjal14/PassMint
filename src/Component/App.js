import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
    const [password, setPassword] = useState("");

    const [length, setLength] = useState(16);

    const [Easy, setEasy] = useState(false);
    const [Moderate, setModerate] = useState(false);
    const [Hard, setHard] = useState(false);

    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);

    const defalt_header = document.querySelector(".defalt_header");
    const copyBtn = document.querySelector(".copyBtn");
    const show_password = document.querySelector(".show_password");

    function copyPassword() {
        navigator.clipboard.writeText(password)
            .then(() => {
                // alert("Code copied to clipboard!");
                // showNotification(messages[0].text, messages[0].type);
            })
            .catch(err => {
                // alert("Failed to copy code. Please try again.");
                // showNotification(messages[1].text, messages[1].type);
            });
    }

    const generatePassword = useCallback(() => {

        defalt_header.style.display = "none";

        show_password.style.display = "block";

        copyBtn.style.display = "flex";

        let password = "";
        let str = "";

        if (includeUppercase || includeLowercase || includeNumbers || includeSymbols) {
            if (includeUppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if (includeLowercase) str += "abcdefghijklmnopqrstuvwxyz";
            if (includeNumbers) str += "0123456789";
            if (includeSymbols) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * str.length);
                password += str[randomIndex];
            }
        }
        else if (str === "") {
            password = "❌Please select at least one option."
        }
        setPassword(password);
    }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

    return (
        <div className="container">
            <div className="password-display">
                <h1 className="defalt_header">🔑Password apper here...</h1>
                <h1 className="show_password">{password}</h1>
                <button className="copyBtn" onClick={() => copyPassword()}>📃</button>
            </div>
            <div className="customizer">
                <h2>Customize your Password:</h2>
                <p className="passLenHeader">Password Length:{length}</p>
                <div className="password-length">
                    <input className="num_length" type="number" min={1} max={50} value={length} onChange={(e) => {
                        let val = e.target.value;
                        if (val < 1) val = 1;
                        else if (val > 50) val = 50;
                        setLength(val)
                    }} />
                    <input className="num_range" type="range" min={1} max={50} value={length} onChange={(e) => {
                        let val = e.target.value;
                        if (val < 1) val = 1;
                        else if (val > 50) val = 50;
                        setLength(val)
                    }} />
                </div>
                <div className="option1">
                    <div className="easy checkbox">
                        <input type="checkbox" id="easy" defaultChecked={Easy} onChange={() => setEasy(!Easy)} />
                        <label htmlFor="easy">Easy</label>
                    </div>
                    <div className="moderate checkbox">
                        <input type="checkbox" id="moderate" defaultChecked={Moderate} onChange={() => setModerate(!Moderate)} />
                        <label htmlFor="moderate">Moderate</label>
                    </div>
                    <div className="hard checkbox">
                        <input type="checkbox" id="hard" defaultChecked={Hard} onChange={() => setHard(!Hard)} />
                        <label htmlFor="hard">Hard</label>
                    </div>
                </div>
                <div className="option2">
                    <div className="uppercase checkbox">
                        <input type="checkbox" id="uppercase" defaultChecked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
                        <label htmlFor="uppercase">Uppercase</label>
                    </div>
                    <div className="lowercase checkbox">
                        <input type="checkbox" id="lowercase" defaultChecked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} />
                        <label htmlFor="lowercase">Lowercase</label>
                    </div>
                    <div className="numbers checkbox">
                        <input type="checkbox" id="numbers" defaultChecked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
                        <label htmlFor="numbers">Numbers</label>
                    </div>
                    <div className="symbols checkbox">
                        <input type="checkbox" id="symbols" defaultChecked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
                        <label htmlFor="symbols">Symbols</label>
                    </div>
                </div>
                <button onClick={() => generatePassword()}>Generate Password</button>
            </div>
        </div>
    )
}

export default App;