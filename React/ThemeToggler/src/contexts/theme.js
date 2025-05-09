import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    isDark : false,
    toggleTheme : ()=>{}
})

export const ThemeProvider =  ThemeContext.Provider;

export function useTheme(){
    return useContext(ThemeContext)
}