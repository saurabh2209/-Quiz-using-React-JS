
import React,{Component} from 'react'

class Choice extends React.Component{
 
 constructor(){
   super()
   
  
  
  
 }

 //forwards user's selected choice to container component
 handleClick() {
 
 
  this.setState({
   
   active:true
  })
  
   this.props.onChoiceSelect(this.props.choice);
  

        
      }
      
 render() {
    
    
   var {choice, answer}=this.props
   // console.log(choice)
   // console.log(...answer)
   var color=""
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
