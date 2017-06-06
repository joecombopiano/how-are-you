import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import FontIcon from 'material-ui/FontIcon';

import './MoodRater.css';

class MoodRater extends Component {
    constructor(props) {
        super(props);
        this.state = {rating: 0};
    }
    updateMoodRating = (event, value) => {
        this.setState({rating: value});
        this.props.onChange('moodRating',value);
    };
    renderMoodDescription = () => {
        let description = "";
        switch(this.state.rating){
            case 1:
            case 2:
                description = "I'm in a bad mood";
                break;
            case 3:
            case 4:
            case 5:
            case 6: 
                description = "I'm feeling meh";
                break;
            case 7:
            case 8: 
            case 9:
                description = "Feeling pretty good";
                break;
            case 10: 
                description = "Best. Day. Ever!"
                break;
            default:
                description = "Worst. Day. Ever."
        }
        return (
            <div className = "RatingDescription"> {description} </div>
        );
    };

    render() {
        return (
            <div className='MoodRater'>
                <h3>How's your mood today? </h3>
                <p>Rate it from 0 (bad) to 10 (great). </p>
                <div className='RatingContainer'>
                    <FontIcon className='material-icons'>sentiment_very_dissatisfied</FontIcon>
                    <Slider className='MoodSlider'  min={0} max={10} step={2} onChange={this.updateMoodRating} />
                    <FontIcon className='material-icons'>sentiment_very_satisfied</FontIcon>
                </div>
                 {this.renderMoodDescription(this.state.rating)}
            </div>
        );
    }

}

export default MoodRater;