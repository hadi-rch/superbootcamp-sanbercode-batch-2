import { createContext, useContext ,useState, useEffect } from "react";

export const ThemeContext = createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        console.log('Theme provider', theme)
    }, [theme])

    const setLightTheme = () => setTheme('light')
    const setDarkTheme = () => setTheme('dark')


    return (
        <ThemeContext.Provider value={{ theme , setLightTheme, setDarkTheme }}>
        {children}
        </ThemeContext.Provider>
    )

}
export default ThemeProvider