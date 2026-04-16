import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Child() {
    const theme = useContext(ThemeContext);
    return(
        <div>
            Theme: {theme}
        </div>
    );
}
