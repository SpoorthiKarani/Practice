import { useState, useEffect } from "react";

export const AsyncAwaitExample = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        setLoading(true);
        setError(null);
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error.message);
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
            getData();
    }, []); 

    return (
        <div>
            <h2>Data fetched - check console</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
};