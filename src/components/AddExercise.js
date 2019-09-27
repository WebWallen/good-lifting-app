import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExercise } from '../actions/index';
import '../index.css';

const AddExercise = (props) => {
    console.log("props from AddExercise ", props);

    const [state, setExercise] = useState({ exercise: "", weight: "", sets: "", reps: "", rest: "" });

    const exerciseHandler = (e) => {
        e.preventDefault();
        props.addExercise(state);
        console.log('State from exerciseHandler ', state);
    }

    const inputHandler = (e) => {
        setExercise({ ...state,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h2>Add an Exercise to Today's Workout</h2>    
            <form onSubmit={exerciseHandler}>
                <input 
                    type="text" 
                    name="exercise" 
                    placeholder="Exercise name..." 
                    onChange={inputHandler} 
                    className="input" 
                />
                <input 
                    type="number"
                    name="weight"
                    placeholder="How much did you lift?"
                    onChange={inputHandler} 
                    className="input"
                />
                <input
                    type="number"
                    name="sets"
                    placeholder="How many sets did you do?"
                    onChange={inputHandler}
                    className="input" 
                />
                <input 
                    type="number"
                    name="reps"
                    placeholder="How many reps per set?"
                    onChange={inputHandler}
                    className="input"
                />
                <input 
                    type="number"
                    name="rest"
                    placeholder="How long did you rest between sets?"
                    onChange={inputHandler}
                    className="input"
                />
                <button className="input button">Submit Exercise</button>
            </form>
        </div>
    )
}

export default AddExercise;