import React, { useState, useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getWorkouts } from './actions/index';
import Workouts from './components/Workouts';
import WorkoutCard from './components/WorkoutCard';
import AddExercise from './components/AddExercise';

const App = ({ workouts, getWorkouts }) => {

  const [state, setState] = useState({ exercise: "", weight: "", sets: "", reps: "", rest: ""})
  console.log('Workouts from app ', workouts);

  useEffect(() => {
    setState(workouts)
  }, [getWorkouts])

  return (

    <div className="App">
      A lifting app that actually works (or will soon)
      <AddExercise />
      <WorkoutCard />
    </div>

  );
}

// const mapStateToProps = state => {
//   return {
//     workouts: state.workouts
//   }
// }

export default App;
// connect(mapStateToProps, { getWorkouts })(App);
