import React, { useState } from 'react';
import {Link} from "react-router-dom";
export const Form=()=> {

    const [id,setId] = useState("");

  return (
    <div>
        <input type="text" placeholder='Asteroid Id' onChange={(e)=>{setId(e.target.value)}}/>
        <Link to= {`/asteroid/${id}`}><button>Submit</button></Link>
    </div>
  )
}


