import './App.css'
import { useState } from 'react';
import IntroScreen from "./components/IntroScreen/IntroScreen";
import GameScreen from "./components/GameScreen/GameScreen";
import classNames from 'classnames';

function App() {

  const [isGameOn, setIsGameOn] = useState(false);

  return (
    <>
      {isGameOn ? <GameScreen className={classNames(StyleSheet.full_screen)}/> : <IntroScreen className={classNames(StyleSheet.full_screen)} isGameOn={isGameOn} setIsGameOn={setIsGameOn}/>}
    </>
  )
}

export default App
