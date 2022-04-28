import React, {useContext} from "react";
import {ThemeContext} from "../../ThemeProvider/ThemeProvider";

const Layout = ({children}) => {
    const {type}=useContext(ThemeContext)
    return <div style={type==='Light'?{backgroundColor:'white'}:{backgroundColor:'black'}}>{children}</div>
}
export default Layout