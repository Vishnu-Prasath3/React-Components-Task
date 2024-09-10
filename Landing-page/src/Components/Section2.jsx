import { Button } from "bootstrap";
import React, { useState } from "react";

export default function(){

    const[show,setshow]=useState(0);
     
  let btnclick=()=>{
    for(let i=1;i<6;i++){
        setshow(show+i);
    }
  }

return(
<>
<button onDoubleClick={()=>{setshow(show-5)}} onClick={btnclick}>click here to increase</button>
<h1>{show}</h1>

</>
)
}