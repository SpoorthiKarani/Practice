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

// Function Currying: Create a function add(a) that returns another function (b), allowing it to be called as add(1)(2).

export const ClosureExample1 = () => {
    const add = (a) => {
        return function b(b){
            return a + b;
        }
    };
    const c = add(1)(2);
    return (
    <div>
        <p>{c}</p>
    </div>
    );
};

// Implement a function that wraps another function and uses a closure to track and log how many times it has been called.

export const ClosureExample2 = () => {
    let count = 0;
    const outer = () => {
        return function inner() {
            count++;
            console.log("Function called " + count + " times");
        };
    };
    outer()();
    outer()();
    outer()();
    outer()();
    return (
        <div>
            {count}
        </div>
    );
};