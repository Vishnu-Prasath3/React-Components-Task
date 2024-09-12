import React, { useState,useEffect } from "react";

export default function({url}){
const[divs,setDivs]=useState([ <div key="1">
<div className="DivOfContent" >
  <h5>Fully responsive design</h5>
<p>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device,<br></br> whether it's a phone, tablet, or desktop the page will behave responsively!</p>
</div>
</div>,
<div  className="DivOfImg" key="2">
<img src={url} ></img>
</div>
]);
return(
<>
<div className="Section2div">
{divs.map((div)=>(<div key={div.key}>{div}</div>))}

</div>
</>
)
}