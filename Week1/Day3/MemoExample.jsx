import { useCallback, useMemo, useState } from 'react';

export const MemoExample1 = () => {

  const grossSalary = useMemo(() => {
    const user = {
      name: "Umais",
      baseSalary: 60000,
      tax: 5000,
      bonus: 10000,
      homeAllowance: 15000,
      fuelAllowance: 5000,
    };
    return user.baseSalary + user.bonus + user.homeAllowance + user.fuelAllowance - user.tax;
  }, []);

  return (
    <div>
      <p>Gross Salary: {grossSalary}</p>
    </div>
  );
};

export const MemoExample2 = () => {
  const expensiveButton = useMemo(() => {
    return ({ handleClick, label }) => {
      console.log(`${label} button rendered`);
      return <button onClick={handleClick}>{label}</button>
    }
  }, []);

    const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
      setCount(prev => prev + 1);
    }, []);

    return (
      <div>
        <p>Count: {count}</p>
        {expensiveButton({handleClick, label: "Increment"})}
      </div>
    );
  };

  return (<ParentComponent />
  );
  };

 export const MemoExample3 = () => {
    const [number, setNumber] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false);

    const doubleNumber = useMemo(() => {
      return slowFunction(number);
    }, [number]);

    const themeStyles = useMemo(() => {
      return {
        backgroundColor: darkTheme? 'black' : 'white',
        color: darkTheme? 'white' : 'black'
      }
    }, [darkTheme]);

    return(
      <>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <button onClick={() => setDarkTheme(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
      </>
    )
 };

 function slowFunction(num) {
    for(let i =0; i<= 1000000000000; i++)
    return num * 2;
  }