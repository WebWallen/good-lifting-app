import React from 'react';

export default function WorkoutCard(props) {
    return (
        <div className="workout-cards">
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

            <div className="workout-card">
                <h2>Clean and Jerk</h2>
                <p>Set 1: 45 lbs x 5 reps</p>
                <p>Set 2: 75 lbs x 5 reps</p>
                <p>Set 3: 85 lbs x 5 reps</p>
                <p>Set 4: 95 lbs x 5 reps</p>
            </div>

            <div className="workout-card">
                <h2>Squats</h2>
                <p>Set 1: 95 lbs x 15 reps</p>
                <p>Set 2: 135 lbs x 12 reps</p>
                <p>Set 3: 185 lbs x 8 reps</p>
                <p>Set 4: 225 lbs x 5 reps</p>
                <p>Set 5: 275 lbs x 3 reps</p>
            </div>

            <div className="workout-card">
                <h2>High Jumps</h2>
                <p>Set 1: BW x 15 reps</p>
                <p>Set 2: BW x 12 reps</p>
                <p>Set 3: BW x 10 reps</p>>
            </div>

            <div className="workout-card">
                <h2>Medicine Ball Throws</h2>
                <p>Set 1: 18 lbs x 18 reps</p>
                <p>Set 2: 20 lbs x 15 reps</p>
                <p>Set 3: 25 lbs x 12 reps</p>
            </div>

            <div className="workout-card">
                <h2>Hammer Curls</h2>
                <p>Set 1: 25 lbs x 12 reps</p>
                <p>Set 2: 20 lbs x 17 reps</p>
                <p>Set 3: 15 lbs x 25 reps</p>
            </div>

            <div className="workout-card">
                <h2>Front Raise</h2>
                <p>Set 1: 20 lbs x 12 reps</p>
                <p>Set 2: 15 lbs x 15 reps</p>
                <p>Set 3: 10 lbs x 18 reps</p>
            </div>

            <div className="workout-card">
                <h2>Triceps Kickback</h2>
                <p>Set 1: 30 lbs x 12 reps</p>
                <p>Set 2: 25 lbs x 15 reps</p>
                <p>Set 3: 20 lbs x 20 reps</p>
            </div>
        </div>
    )
}