import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  // use state hooks
  const [passwordLength, usePasswordLength] = useState(8);
  const [numbersAllowed, useNumbersAllowed] = useState(false);
  const [specialCharactersAllowed, useSpecialCharactersAllowed] = useState(false);
  const [password, usePassword] = useState("");

  // use ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{

    let allowedCharacters = "";
    let currentPassword = "";

    for (let i=65; i<=90; i++){
      allowedCharacters += String.fromCharCode(i);
      allowedCharacters += String.fromCharCode(i+32);
    }

    if (specialCharactersAllowed){
      allowedCharacters += "@#$%^&*!()_+";
    }

    if (numbersAllowed){
      for (let i=0; i<10; i++){
        allowedCharacters += String.fromCharCode(i+48);
      }
    }

    for (let i=0; i<passwordLength; i++){
      currentPassword += allowedCharacters[Math.floor(Math.random()*allowedCharacters.length)];
    }
    usePassword(currentPassword);

  }, [passwordLength, numbersAllowed, specialCharactersAllowed, usePassword]);

  const copyPasswordToClipBoard = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }, [password]);

  useEffect(()=>{
      passwordGenerator()
  }, [passwordLength, numbersAllowed, specialCharactersAllowed, passwordGenerator])

  return (
    <>
      <div className="password-generator-container">
        <div className="heading">Password Generator</div>
        <div className="password-container">
          <input type="text" id="password-field" readOnly placeholder='Password' value={password} ref={passwordRef}/>
          <button className="copy-button" onClick={copyPasswordToClipBoard}>copy</button>
        </div>
        <div className="parameter-container">
          <div className="input-control">
            <input type="range" min={6} max={22} name="password-length-field" id="password-length-field" value={passwordLength} onChange={(e)=>{usePasswordLength(e.target.value)}}/>
            <label htmlFor="password-length-field">Length: {passwordLength}</label>
          </div>
          <div className="input-control">
            <label htmlFor="number-inclusion-field">Numbers</label>
            <input type="checkbox" name="number-inclusion-field" id="number-inclusion-field" checked={numbersAllowed} onChange={(e)=>{useNumbersAllowed((prev) => !prev)}} />
          </div>
          <div className="input-control">
            <label htmlFor="character-inclusion-field">Letters</label>
            <input type="checkbox" name="character-inclusion-field" id="character-inclusion-field" checked={specialCharactersAllowed} onChange={(e)=>{useSpecialCharactersAllowed((prev) => !prev)}} />
          </div>
          <div className="input-control"></div>
        </div>
      </div>
    </>
  )
}

export default App
