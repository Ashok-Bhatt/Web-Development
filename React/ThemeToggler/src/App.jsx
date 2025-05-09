import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import { useEffect, useState } from 'react'

function App() {

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = ()=>{
    setIsDark((isDark)=>!isDark);
  }

  useEffect(()=>{
    document.querySelector("html").classList.remove("light", "dark");
    if (isDark) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.add("light");
    }
  }, [isDark]);

  return (
    <>
      <ThemeProvider value={{isDark, toggleTheme}}>
        <ThemeButton/>
        <Card/>
      </ThemeProvider>
    </>
  )
}

export default App
