
import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);

    const [pending, isPending] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(()=>{
            setTimeout(()=>{
                fetch(url)
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
                    setErrorMessage(err.message);
                    isPending(false);
                })
            }, 2000);
            
        }, []);
    return { data, pending, errorMessage  };
}
 
export default useFetch;