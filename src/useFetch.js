
import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);

    const [pending, isPending] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(()=>{
            const abortController = new AbortController();

            setTimeout(()=>{
                fetch(url, {signal: abortController.signal})
                .then(resp=>{
                    //console.log(resp);
                    if(!resp.ok){
                        throw Error("Could not fetch the data of the resource.")
                    }
                    return resp.json();
                })
                .then(json=>{
                    setData(json);
                    isPending(false);
                    setErrorMessage(null);
                })
                .catch(err=>{
                    if(err.name==='AbortError'){
                        console.log('Fetch Aborted..');
                    } else{
                        setErrorMessage(err.message);
                        isPending(false);
                    }
                    
                })
            }, 2000);

            return ()=>abortController.abort();
            
        }, [url]);
    return { data, pending, errorMessage  };
}
 
export default useFetch;