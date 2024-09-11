import React, { useState,useEffect } from "react";

export default function(){
let[change,setChange]=useState()
useEffect(()=>{
//side efffect score is here
console.log("useEffect");

},[change])  


return(
<>
<div className="sec-two">
<button onClick={()=>{
    setChange(change+"changed")
}}>Prasathly</button>
</div>
</>
)
}