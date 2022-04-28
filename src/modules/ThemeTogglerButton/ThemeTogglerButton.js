
import {useContext} from "react";
import {ThemeContext} from "../../ThemeProvider/ThemeProvider";



const ThemeTogglerButton = () => {

    const {type, setType} = useContext(ThemeContext)
    return (<button
            onClick={()=> {
                setType(type =>
                    type === 'Light' ? 'Dark'
                        : 'Light'
                )
            }}>
            Toggle Theme
        </button>
    )


}
export default ThemeTogglerButton