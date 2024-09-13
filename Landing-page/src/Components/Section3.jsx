import React from "react";

export default function(){
    return(
       <>
       <div className="Section3">
       <div>
        <h1>What People Are Saying...</h1>
       </div>
       <div className="section3-div">
        <div>
            <img src="../src/assets/images/person1.jpg" alt="img" width={300} height={250}></img>
            <h1>Margaret E</h1>
            <p>"This is fantastic! Thanks so much guys!"</p>
        </div>

        <div>
            <img src="../src/assets/images/person2.jpeg" alt="img" width={300} height={250}></img>
            <h1>Fred S.</h1>
            <p>"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
        </div> 

        <div>
            <img src="../src/assets/images/person3.jpeg" alt="img" width={250} ></img>
            <h1>Sarah W.</h1>
            <p>"Thanks so much for making these free resources available to us!"</p>
        </div>  
               </div> 
       </div>
       </>
    )
}