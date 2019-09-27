import React from 'react';

export default function WorkoutCard(props) {
    return (
        <div className="workout-card">
            <h2>{props.workout.name}</h2>
            <p> 
                {props.workout.weight} lbs x
                {props.workout.sets} Sets + 
                {props.workout.reps} Reps
                <br />
                Rest Period: {props.workout.rest}
            </p>
        </div>
    )
}