import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    darkMode : false,
    toggle : (darkMode)=>{darkMode = !darkMode},
})

export const ThemeProvider = ThemeContext.Provider;

export default useTheme = ()=>{
    return useContext(ThemeContext);
}