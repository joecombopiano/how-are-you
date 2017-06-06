import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import FontIcon from 'material-ui/FontIcon';

import './StressRater.css';

class StressRater extends Component {
    constructor(props) {
        super(props);
        this.state = {rating: 0};
    }
    updateRating = (event, value) => {
        this.setState({rating: value});
        this.props.onChange('stressRating',value);
    };
    renderDescription(){
        let description = "";
        switch(this.state.rating){
            case 1:
            case 2:
                description = "Extremely stressed";
                break;
            case 3:
            case 4:
            case 5:
            case 6: 
                description = "This is fine.";
                break;
            case 7:
            case 8: 
            case 9:
                description = "Feeling stress free.";
                break;
            case 10: 
                description = "My mind is currently laying on a beach."
                break;
            default:
                description = "Can't eat/sleep."
        }
        return (
            <div className = "RatingDescription"> {description} </div>
        );
    }
    render() {
        
        return (
            <div className='StressRater'>
                <h3>How's your stress?</h3>
                <div className='RatingContainer'>
                    <FontIcon className='material-icons'>arrow_downward</FontIcon>
                    <Slider className='MoodSlider'  min={0} max={10} step={1} onChange={this.updateRating} />
                    <FontIcon className='material-icons'>arrow_upward</FontIcon>
                </div>
                {this.renderDescription(this.state.rating)}
            </div>
        );
    }
}
export default StressRater;