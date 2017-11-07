
import React,{Component} from 'react'

class Choice extends React.Component{
 
 //forwards user's selected choice to container component
 handleClick() {
 
 this.props.onChoiceSelect(this.props.choice);
  
}
      
 render() {
    var {choice, answer}=this.props
    var color=""
   
   //Remembering the user's answer when user goes back to a particular question
   for(var i=0;i<answer.length;i++){
     if(choice==answer[i])
    color="#21c064"
    }
  
   // var color=this.state.active ? "green" :"white"
   
    return (
     <input type="button" style={{backgroundColor:color}}  className="choices" value={this.props.choice}  onClick={this.handleClick.bind(this)  }  />
        
        );
    }
} 

export default Choice
