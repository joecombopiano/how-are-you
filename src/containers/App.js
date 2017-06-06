import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import * as RatingActions from '../actions'


const App = ({ratings, actions}) => (
    <MuiThemeProvider>
      <div>
        <Header/>
        <MainSection ratings={ratings} actions={actions}/>
      </div>
    </MuiThemeProvider>
)

App.propTypes = {
  ratings: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  ratings: state.ratings
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(RatingActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

