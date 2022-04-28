import {createContext, useState} from "react";

export const ThemeContext = createContext({type: "Light"})
const ThemeProvider = ({children}) => {
    const [type, setType] = useState("Dark")
    return <ThemeContext.Provider value={{type, setType}}>
        {children}
    </ThemeContext.Provider>
}
export default ThemeProvider