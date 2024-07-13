import { useEffect, useState } from "react";


const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);



   
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if(!response.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, isLoading, error };
}

export default UseFetch