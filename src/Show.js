import React from 'react';
import './index.css'

class Show extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'Fillo',
            title: 'Kuizi ne React ?',
            buttonText: 'Fillo kuizin' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
    popupHandle() {
        let { time } = this.state;
        
        if(time === 'Fillo'){
            this.setState({
                time: 'Fund',
                title: 'Ke filluar prap',
                buttonText: 'Rifillo'
            });
            
            this.props.startQuiz();
        } else {            
            
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: '  Te Qelluar <strong>' + this.props.score + '</strong>  <strong>'+'</strong> nr i pytjeve.' +this.props.total 
        })
    }
    
    createMarkup(text) {
        return {__html: text};////////////////teksti sa pike jane edhe numri i pytjeve
    }
    
    
    render() {
       
        let { title, text, buttonText } = this.state;
        
        
        return (
            <div className="popup-container" >
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="popup">
                            <h1>{title}</h1>
                            <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                            <button className="fancy-btn" onClick={this.popupHandle}>{buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show
