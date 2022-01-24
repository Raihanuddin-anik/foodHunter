/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

const customHook = (asyncFunction) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

useEffect(() => {
       
        setData(null);
        setError(null);
        asyncFunction()
            .then((res) => {
                setData(res);
                setError(null);
            })
            .catch((err) => {
                setError(err);
                setData(null);
            });
    }, [asyncFunction]);

    return {
        data,
        error,
    };
};

export default customHook;