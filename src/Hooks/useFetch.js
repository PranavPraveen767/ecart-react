import { useEffect, useState } from "react"



const useFetch = (url) =>{
    const [data,setdata] = useState(null)
    //logic
    useEffect(()=>{fetch(url).then(res=>{
        res.json().then(result=>{
           setdata(result)
        })
    })
    },[])
    return data
}

export default useFetch;