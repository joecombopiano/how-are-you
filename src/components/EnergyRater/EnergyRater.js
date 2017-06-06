import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import FontIcon from 'material-ui/FontIcon';

import './EnergyRater.css';

class EnergyRater extends Component {
    constructor(props) {
        super(props);
        this.state = {rating: 0};
    }
    updateRating = (event, value) => {
        this.setState({rating: value});
        this.props.onChange('energyRating', value);
    };
    renderMoodDescription = () => {
        let description = "";
        switch(this.state.rating){
            case 1:
            case 2:
                description = "I've thought about getting off the couch.";
                break;
            case 3:
            case 4:
            case 5:
            case 6: 
                description = "I'm moving, isn't that good enough?";
                break;
            case 7:
            case 8: 
            case 9:
                description = "Everywhere I was going, I was running.";
                break;
            case 10: 
                description = "Going to climb Mt. Everest"
                break;
            default:
                description = "zzzzzz"
        }
        return (
            <div className = "RatingDescription"> {description} </div>
        );
    };

    render() {
        return (
            <div className='EnergyRater'>
                <h3>How's your energy level today? </h3>
                <p>Rate it from 0 (tired) to 10 (active). </p>
                <div className='RatingContainer'>
                    <FontIcon className='material-icons'>hotel</FontIcon>
                    <Slider className='EnergySlider'  min={0} max={10} step={1} onChange={this.updateRating} />
                    <FontIcon className='material-icons'>directions_bike</FontIcon>
                </div>
                 {this.renderMoodDescription(this.state.rating)}
            </div>
        );
    }

}

export default EnergyRater;