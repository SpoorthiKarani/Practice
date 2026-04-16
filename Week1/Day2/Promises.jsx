export const PromiseExample1 = () => {
    let promise = new Promise((resolve, reject) => {
        let a = 1 + 1;
        if (a === 2) {
            resolve("Success");
        } else {
            reject("failed");
        }
    });

    promise.then((message) => {
        console.log("In the then block:" + message);
    }).catch((message) => {
        console.log("In the catch block:" + message);
    });

    return (
        <div>
            <h2>Promise Example - check console</h2>
        </div>
    )
};

export const PromiseExample2 = () => {
    const promise1 = new Promise((resolve, delay = 2000) => {
        setTimeout(() => {
            resolve("Promise 1 resolved");
        }, delay);
    });
    const promise2 = new Promise((resolve, delay = 3000) => {
        setTimeout(() => {
            resolve("Promise 2 resolved");
        }, delay);
    });
    Promise.all([promise1, promise2]).then(([res1, res2]) => {
        console.log("res1: " + res1);
        console.log("res2: " + res2);
    });
};

// Write a delay(ms) function that returns a promise which resolves after the specified number of milliseconds using setTimeout.

export const PromiseExample3 = () => {
    const delay = (time) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("success")
            }, time);
            console.log("Promise resolved in " + time + " milliseconds");
        });
    };
    delay(3000);
};

// Manually implement a function that takes an array of promises and resolves only when all have succeeded, or rejects immediately if any fail. - giving some error

// export const PromiseExample4 = async () => {
//     const promise1 = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("AAAA");
//         }, 2000);
//     });
//     const promise2 = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("BBBB");
//         }, 3000);
//     });

//     const [p1, p2] = await Promise.all([promise1, promise2]);
//     console.log("p1: " + p1);
//     console.log("p2: " + p2);
// };
