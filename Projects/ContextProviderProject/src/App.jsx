import './App.css'
import UserContextProvider from './context/userContextProvider'
import WelcomeScreen from './components/WelcomeScreen'
import Login from './components/Login'
import ThemeContext, { ThemeProvider } from './context/themeContext'

function App() {

  return (
    <UserContextProvider>
        <WelcomeScreen/>
        <Login/>
    </UserContextProvider>
  )
}

export default App
