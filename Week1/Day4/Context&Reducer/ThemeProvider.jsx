import { ThemeContext } from "./ThemeContext";
import Child from "./Child";

export const ThemeProvider = () => {
    return(
        <ThemeContext.Provider value="dark">
            <Child />
        </ThemeContext.Provider>
    );
};