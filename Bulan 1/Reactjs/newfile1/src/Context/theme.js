import { createContext, useContext ,useState, useEffect } from "react";

export const ThemeContext = createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        console.log('Theme provider', theme)
    }, [theme])

    const setDarkTheme = () => setTheme('dark')
    const setLightTheme = () => setTheme('light')


    return (
        <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
        {children}
        </ThemeContext.Provider>
    )

}
export default ThemeContext