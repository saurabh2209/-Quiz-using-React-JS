
import React from 'react'
import {Link} from 'react-router'

const Score = (props)=>{
    
const { currentscore, quiz}=props    
    let hash={}
    let totalscore=0
//Stores the latest score of a user for a question
for(var i=0;i<props.currentscore.length;i++){
        
        if(hash[currentscore[i].q]==undefined)
        hash[currentscore[i].q]=currentscore[i].score
        
        else
        hash[currentscore[i].q]=currentscore[i].score
        
}
  
  //Calculate total score by fetching individual score from hash map 
   Object.values(hash).forEach(function(current){
       
       totalscore+=current
       
       
   })    
  
         
     return (
            <div className="rules">
              
               <div> <span className="label label-success">Your final score is {totalscore} out of {quiz.length*3}  points </span> </div>
                <div><span className="label label-success">You scored {((totalscore/(quiz.length*3))*100 ).toFixed(2)} %</span></div>
                <Link to="/"> Back to main page </Link>
            </div>
        );
    
    
}    
    
    
export default Score    



