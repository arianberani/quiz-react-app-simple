
import React from 'react';
import './index.css'
class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
            classNames: []
        }
        
        this.checkAnswer = this.checkAnswer.bind(this);
    }
    
    checkAnswer(e) {
        let { isAnswered } = this.props;
        
        if(!isAnswered) {
            let elem = e.currentTarget;
            let { correct, increaseScore } = this.props;
            let answer = Number(elem.dataset.id);
            let updatedClassNames = this.state.classNames;

            if(answer === correct){
                updatedClassNames[answer-1] = 'right';
                increaseScore();
            }
            else {
                updatedClassNames[answer-1] = 'wrong';
            }
            
            this.setState({
                classNames: updatedClassNames
            })

            this.props.showButton();
        }
    }
    
  
    
    render() {
        let { answers } = this.props;
        let { classNames } = this.state;
        
       
        
        return (
            <div id="answers">
                <ul>
                    <li  onClick={this.checkAnswer} className={classNames[0]} data-id="1"><span></span> <p>{answers[0]}</p></li>
                    <li  onClick={this.checkAnswer} className={classNames[1]} data-id="2"><span></span> <p>{answers[1]}</p></li>
                </ul>
                <ul>
                    <li  onClick={this.checkAnswer} className={classNames[2]} data-id="3"><span></span> <p>{answers[2]}</p></li>
                    <li  onClick={this.checkAnswer} className={classNames[3]} data-id="4"><span></span> <p>{answers[3]}</p></li>
                </ul>
            </div>
        );
    }
}

export default Answers