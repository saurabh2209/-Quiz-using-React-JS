
import React from 'react'
import {Link} from 'react-router'

const Main =function(props){
    
    return (
            <div className="jumbo">
             <Link to ="/assessment">Start Quiz</Link> 
            {props.children} 
            </div>
        );    
    
}
export default Main
