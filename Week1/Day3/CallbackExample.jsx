import {useCallback, useState } from 'react';
import List from './List';

export const CallbackExample = () => {
    const [number, setNumber] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false);

    const themeStyles = {
        backgroundColor: darkTheme? 'black' : 'white',
        color: darkTheme? 'white' : 'black'
    }

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number])

    return(
        <div style={themeStyles}>
            <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={() => setDarkTheme(prevDark => !prevDark)}>Change Theme</button>
            <List getItems={getItems}></List>
        </div>
    )
}; 