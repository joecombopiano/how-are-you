import React, { Component } from 'react';
import ResultItem from '../../components/ResultItem/ResultItem';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


import './Summary.css';


const filterYear = (rating) => {
    const currentDate = new Date();
    const ratingDate = new Date(rating.createdAt);

    return currentDate.getFullYear() === ratingDate.getFullYear();  
}


const filterMonth = (rating) => {
    const currentDate = new Date();
    const ratingDate = new Date(rating.createdAt);
    
    return filterYear(rating) && currentDate.getMonth() === ratingDate.getMonth()   
};


const filterDay = (rating) => {
    const currentDate = new Date();
    const ratingDate = new Date(rating.createdAt);

    return filterMonth(rating) && currentDate.getDate() === ratingDate.getDate()
}

const FILTERS = [
  () => true,
  filterYear,
  filterMonth,
  filterDay
];

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {currentFilter: 0};
    }
    
    updateFilter(event, index, value) { 
        this.setState({currentFilter: value});
    }
    getAvgRating(ratings){
        var sum = ratings.reduce(function(result, currentValue) {
            return result + currentValue
        }, 0);

        return sum / ratings.length || 1;
    }
    render() {
        const filteredRatings = this.props.ratings.filter(FILTERS[this.state.currentFilter]);
        const moodRating = this.getAvgRating(filteredRatings.map( obj => obj.moodRating));
        const stressRating = this.getAvgRating(filteredRatings.map( obj => obj.stressRating));
        const energyRating = this.getAvgRating(filteredRatings.map( obj => obj.stressRating));

        return (
            <div className='Summary'>
                <span>
                    <h3>Here's your summary </h3>
                    <SelectField value={this.state.currentFilter} onChange={this.updateFilter.bind(this)}>
                        <MenuItem value={0} primaryText='Overall' />
                        <MenuItem value={1} primaryText='This year' />
                        <MenuItem value={2} primaryText='This month' />
                        <MenuItem value={3} primaryText='Today' />
                    </SelectField>
                </span>
              <div className='Results'>
                <ResultItem title='Mood' rating={moodRating} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                <ResultItem title='Stress' rating={stressRating} description='Fusce a arcu massa. Duis sit amet vehicula sapien, in sodales elit.' />
                <ResultItem title='Energy' rating={energyRating} description='Phasellus massa augue, pharetra at nibh vel, malesuada dignissim lectus.' />
              </div>

            </div>
        );
    }
}
export default Summary;