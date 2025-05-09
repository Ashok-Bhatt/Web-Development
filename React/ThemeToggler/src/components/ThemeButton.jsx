import {useTheme} from "../contexts/theme";

const toggleColor = ()=>{

}

const ThemeButton = ()=>{

    const {isDark, toggleTheme} = useTheme();

    const changeMode = ()=>{
        toggleTheme();
    }

    return(
        <div>
            <input type="checkbox" value="Change Color" checked={isDark} onChange={changeMode}></input>
        </div>
    )
}

export default ThemeButton;