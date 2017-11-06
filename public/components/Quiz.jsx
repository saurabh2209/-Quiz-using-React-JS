
const quiz=require('../questions/questions.js').questions.quiz
import React,{Component} from 'react'
import Choice from 'Choice'
import Score from 'Score'



 class Quiz extends Component{
     
     constructor(props){
         super(props)
       this.state={
           
           current: 0,
            current_quiz: quiz[ 0 ],
             score: [],
             choice:[]
           
           
       }
         
}
     
     // Stores the score of user for a question based on user's answer
     selectedAnswer(option) {
        
      let x=  this.state.current_quiz.choices.filter(function(current){
            
            return current.answer==option
            
        })
        
         
         this.state.choice[this.state.current]=option
        // console.log(this.state.choice)
       
        
       this.setState( {
                        score:  [...this.state.score, {q:this.state.current_quiz.question,score: x[0].points}],
                        
                         current_quiz: quiz[ this.state.current + 1 ],
                        current: this.state.current + 1,
                        choice: this.state.choice
                       
                    } );
               
                
        }
    
    //Navigate to the previous question 
    handleBack(){
        
        this.setState({
            
            current_quiz:quiz[ this.state.current - 1 ],
            current: this.state.current - 1,
            
            
        })
        
        
    }
    
    //Navigate to the next question
    handleNext(){
        
         this.setState({
            
            current_quiz:quiz[ this.state.current + 1 ],
            current: this.state.current + 1
            
            
        })
        
     }
     
     
    
    
   render(){
       
        let {current, answer, choice}=this.state
        
       
            var switchquestions=function(){
            
            if(this.state.current==0)
             //Makes only the next button visible on a first page 
            return  <button onClick={this.handleNext.bind(this)}>Next</button>
            
            else if(this.state.current==(quiz.length-1)){
                  //Makes only the back button visible on a last page 
             return (
                 <div>
                 
                 <button onClick={this.handleBack.bind(this)}>Back</button> 
                 
                 </div>
            )     
            
            }
             
            else{
                 //Makes both next and back buttons visible
            return(
                <div>
                <button onClick={this.handleBack.bind(this)}>Back</button>
                <button onClick={this.handleNext.bind(this)}>Next</button>
                </div>
                )    
                
            }
            
          }.bind(this)    
        
        
        if(this.state.current<quiz.length){
                //displays all questions and choices till available
             let choices = this.state.current_quiz.choices.map( ( currentchoice )=> {
           
            return (

                <Choice   key={currentchoice.answer} choice={currentchoice.answer} onChoiceSelect={this.selectedAnswer.bind(this)} answer={choice}/>
              
            );
        } );
        
      
                 
             
            return(
                <div>
            <div className="container" >
                
                <p>{this.state.current_quiz.question}</p>
          
                <div align="center">
                {choices}
                </div><br/><br/>
                <div className="controls" align="left">
                {switchquestions()}
                
            </div> 
               
            </div> 
             <div className="status"><b> {current+1} of {quiz.length} </b></div>    
            </div>
        );
    
            }
            
        else{
            //displays final score 
            return (
                <div className="container text-center">
                <h3>Quiz is Complete</h3>
                <Score  currentscore={this.state.score} quiz={quiz}/>
                </div>
                )
            
            
        }    
        
        
        
        
    }
    
   
}
export default Quiz
