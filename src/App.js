import React, { useState, useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getWorkouts } from './actions/index';

const App = ({ workouts, getWorkouts }) => {

  const [state, setState] = useState({ exercise: "", sets: "", reps: "", rest: ""})
  console.log('Workouts from app ', workouts);

  useEffect(() => {
    setState(workouts)
  }, [getWorkouts])

  return (
    <div className="App">
      A lifting app that actually works (or will soon)
    </div>
  );
}

const mapStateToProps = state => {
  return {
    workouts: state.workouts
  }
}

export default connect(mapStateToProps, { getWorkouts })(App);
