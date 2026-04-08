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