import React from 'react';
import '../index.css';

export default function WorkoutCard(props) {
    return (
        <div className="workout-card">
            {/* Commenting out below so I can render + style */}
            {/* <h2>{props.workout.name}</h2>
            <p> 
                {props.workout.weight} lbs x
                {props.workout.sets} Sets + 
                {props.workout.reps} Reps
                <br />
                Rest Period: {props.workout.rest}
            </p> */}

            <h1>Date: 09/27/19</h1>

            <div className="exercise-card">
                <h2>Clean and Jerk</h2>
                <p>Set 1: 45 lbs x 5 reps</p>
                <p>Set 2: 75 lbs x 5 reps</p>
                <p>Set 3: 85 lbs x 5 reps</p>
                <p>Set 4: 95 lbs x 5 reps</p>
                <p>Rest Period: 2 minutes</p>
            </div>

            <div className="exercise-card">
                <h2>Bench Press</h2>
                <p>Set 1: 95 lbs x 9 reps</p>
                <p>Set 2: 105 lbs x 8 reps</p>
                <p>Set 3: 115 lbs x 7 reps</p>
                <p>Set 4: 125 lbs x 6 reps</p>
                <p>Set 5: 135 lbs x 5 reps</p>
                <p>Rest Period: 30 seconds</p>
            </div>

            <div className="exercise-card">
                <h2>Bent-Over Row</h2>
                <p>Set 1: 95 lbs x 9 reps</p>
                <p>Set 2: 105 lbs x 8 reps</p>
                <p>Set 3: 115 lbs x 7 reps</p>
                <p>Set 4: 125 lbs x 6 reps</p>
                <p>Set 5: 135 lbs x 5 reps</p>
                <p>Rest Period: 30 seconds</p>
            </div>

            <div className="exercise-card">
                <h2>Squats</h2>
                <p>Set 1: 95 lbs x 15 reps</p>
                <p>Set 2: 135 lbs x 12 reps</p>
                <p>Set 3: 185 lbs x 8 reps</p>
                <p>Set 4: 225 lbs x 5 reps</p>
                <p>Set 5: 275 lbs x 3 reps</p>
                <p>Rest Period: 1 minute</p>
            </div>

            <div className="exercise-card">
                <h2>High Jumps</h2>
                <p>Set 1: BW x 15 reps</p>
                <p>Set 2: BW x 12 reps</p>
                <p>Set 3: BW x 10 reps</p>
                <p>Rest Period: 30 seconds</p>
            </div>

            <div className="exercise-card">
                <h2>Medicine Ball Throws</h2>
                <p>Set 1: 18 lbs x 18 reps</p>
                <p>Set 2: 20 lbs x 15 reps</p>
                <p>Set 3: 25 lbs x 12 reps</p>
                <p>Rest Period: 30 seconds</p>
            </div>

            <div className="exercise-card">
                <h2>Hammer Curls</h2>
                <p>Set 1: 25 lbs x 12 reps</p>
                <p>Set 2: 20 lbs x 17 reps</p>
                <p>Set 3: 15 lbs x 25 reps</p>
                <p>Rest Period: 45 seconds</p>
            </div>

            <div className="exercise-card">
                <h2>Front Raise</h2>
                <p>Set 1: 20 lbs x 12 reps</p>
                <p>Set 2: 15 lbs x 15 reps</p>
                <p>Set 3: 10 lbs x 18 reps</p>
                <p>Rest Period: 45 seconds</p>
            </div>

            <div className="exercise-card">
                <h2>Triceps Kickback</h2>
                <p>Set 1: 30 lbs x 12 reps</p>
                <p>Set 2: 25 lbs x 15 reps</p>
                <p>Set 3: 20 lbs x 20 reps</p>
                <p>Rest Period: 45 seconds</p>
            </div>
        </div>
    )
}