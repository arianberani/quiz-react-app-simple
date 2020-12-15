import React from 'react';
import data from './data';
import Answers from './Answers';
import Show from './Show';
import Footer from './Footer';
import './index.css'
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: data.length,////////numrii i data
            showButton: false,/////////////per mu shfaqe buttoni pytja e ardhshme
            questionAnswered: false,
            score: 0,
            displayPopup: 'nr'
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleStartQuiz = this.handleStartQuiz.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    }

    pushData(nr) {
        this.setState({
            question: data[nr].question,
            answers: [data[nr].answers[0], data[nr].answers[1] ,data[nr].answers[2], data[nr].answers[3]],/////////pytjet
            correct: data[nr].correct,
            nr: this.state.nr + 1
        });
    }

    componentWillMount() {
        let { nr } = this.state;
        this.pushData(nr);
    }

    nextQuestion() {
        let { nr, total, score } = this.state;

        if(nr === total){
            this.setState({
                displayPopup: 'nr'
            });
        } else {
            this.pushData(nr);
            this.setState({
                showButton: false,
                questionAnswered: false
            });
        }

    }

    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }

    handleStartQuiz() {
        this.setState({
            displayPopup: 'none',
            nr: 1
        });
    }

    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 1 ///////piket e qelluara
        });
    }

    render() {
        let { nr, total, question, answers, correct, showButton, questionAnswered, displayPopup, score} = this.state;

        return (
            <div className="container">

                <Show style={{display: displayPopup}} score={score} total={total} startQuiz={this.handleStartQuiz}/>

                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1">
                        <div id="question">
                            <h4>Pytja {nr}/{total}</h4>
                            <p>{question}</p>
                        </div>
                        <Answers answers={answers} correct={correct} showButton={this.handleShowButton} isAnswered={questionAnswered} increaseScore={this.handleIncreaseScore}/>
                        <div id="submit">
                            {showButton ? <button className="fancy-btn" onClick={this.nextQuestion} >{nr===total ? 'Perfundoj  kuizi' : 'Pytja e ardhshme'}</button> : null}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default Main
