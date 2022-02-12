import { useEffect, useState } from 'react';

function useFetch(url) {

    console.log('use fetch load');
    
    const [data, setData] = useState(null);
  
    useEffect(() => {
        const fetchData = () => fetch(url)
        .then(response => response.json())
        .then(result => {
            setData(result);
        });

        fetchData();

    },[url]);

    return data;
  }


  export default useFetch;