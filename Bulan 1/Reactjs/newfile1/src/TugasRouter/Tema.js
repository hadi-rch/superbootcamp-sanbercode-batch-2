import {useTheme} from "./theme"

const Tema = () => {
const themeContext = useTheme()
const {theme, setLightTheme, setDarkTheme} = themeContext

return (
    <div>
        <h3> Theme: {theme}</h3>
        <button onClick={setDarkTheme}>Dark</button> <br/>
        <button onClick={setLightTheme}>Light</button>
    </div>
)
}


export default Tema