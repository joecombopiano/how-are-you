import React, { Component } from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import StressRater from '../../components/StressRater/StressRater';
import MoodRater from '../../components/MoodRater/MoodRater';
import EnergyRater from '../../components/EnergyRater/EnergyRater';
import Summary from '../../components/Summary/Summary';
import './MainSection.css';


class MainSection extends Component {

  state = {
    finished: false,
    stepIndex: 0,
    rating:{'moodRating': 0, 'stressRating': 0, 'energyRating': 0}
  };
  
  saveRating() {
    this.props.actions.addRating(this.state.rating);
  }
  updateRating(property, value){
      const rating = this.state.rating;
      rating[property] = value;
      this.setState({rating: rating});
  }

  handleNext() {
    const stepIndex = this.state.stepIndex + 1;
    const finished = stepIndex > 2;
    this.setState({
      stepIndex: stepIndex,
      finished: finished,
    });
    if(finished) {
        this.saveRating();
    }
  };

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext.bind(this)}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label='Back'
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev.bind(this)}
          />
        )}
      </div>
    );
  }
  renderStepper(stepIndex) {
    return (
        <div className ='MainStepper'>
            <Stepper activeStep={stepIndex} orientation='vertical'>
            <Step>
                <StepLabel>Mood</StepLabel>
                <StepContent>
                    <MoodRater onChange={this.updateRating.bind(this)}/>
                    {this.renderStepActions(0)}
                </StepContent>
            </Step>
            <Step>
                <StepLabel>Stress</StepLabel>
                <StepContent>
                <StressRater onChange={this.updateRating.bind(this)}/>
                {this.renderStepActions(1)}
                </StepContent>
            </Step>
            <Step>
                <StepLabel>Energy</StepLabel>
                <StepContent>
                <EnergyRater onChange={this.updateRating.bind(this)}/>
                {this.renderStepActions(2)}
                </StepContent>
            </Step>
            </Stepper>
        </div>);
  }
  renderSummary(){

  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div className='MainSection'>
        {!finished && this.renderStepper(stepIndex)}
        {finished && (<Summary ratings={this.props.ratings}/>)}
      </div>
    );
  }
}

export default MainSection;