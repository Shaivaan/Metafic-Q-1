import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams,Link } from 'react-router-dom';
export const Asteroid=()=> {
    const {id} = useParams();
    const [data,setData] = useState(null);
    useEffect(()=>{
        getPokemon(id);
    },[])  

    function getPokemon(as){
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/${as}?api_key=6XGdH0BMbjeWw5LA6BI88fhmTE4cxblcZUq2neyC`)
        .then((res)=>{
            res.json().
            then((res)=>{
                setData(res);
            })
            .catch((res)=>{
               setData(null);
            })
        })
       
    }

  return (
    <div>
        <Link to = "/"><button>Home</button></Link><br/>
      {data ? JSON.stringify(data):"Asteroid Not Found"}
    </div>
  )
}

