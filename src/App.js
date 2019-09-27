import React, { useState, useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getWorkouts } from './actions/index';
import { Link, Route } from 'react-router-dom';
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
      <h2>A lifting app that actually works (or will soon)</h2>
      <Link to="/"><p>Click here to return home.</p></Link>
      <Link to="/workouts"><p>Click here to view past training logs.</p></Link>
      <Link to="/add-exercise"><p>Click here to add an exercise to your current workout.</p></Link>

      <Route path="/workouts" component={WorkoutCard} />
      <Route path="/add-exercise" component={AddExercise} />
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
