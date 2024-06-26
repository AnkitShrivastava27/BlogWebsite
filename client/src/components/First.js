import React from "react";
import { useEffect,useState } from "react";
const First=()=>{
    cosnt[data,setData]=useState('');
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        try {
          const response = await fetch("https://wrightist-backend.vercel.app/");
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
    return(
        <div>
        {data}
        </div>
    )

}
export default First