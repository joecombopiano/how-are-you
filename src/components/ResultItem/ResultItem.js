import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import './ResultItem.css';

class ResultItem extends Component {
    render(){
        return (
            <Paper className='ResultItem' circle={true} zDepth={3}>
                <h1>{this.props.title} </h1>
                <h2>{this.props.rating} </h2>
                <p>{this.props.description} </p>
            </Paper>
        );
    }

}

export default ResultItem;