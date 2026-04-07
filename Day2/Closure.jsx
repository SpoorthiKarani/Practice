export const Closure = () => {
    const myName = 'Spoorthi';

    const displayName = () => {
        console.log(myName);
    };

    displayName();

    const outerFunction = (outerVariable) => {
        const innerVariable = 'Inner Value';
        const innerFunction = () => {
            console.log("Outer Variable: " + outerVariable);
            console.log("Inner Variable: " + innerVariable);
        };
        return innerFunction;
    };

    outerFunction('Outer Value')();

    return (
        <div>
            <h1>Closure example</h1>
            <p>{myName}</p>
        </div>
    );
};