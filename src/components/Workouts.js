import React from 'react';
import { connect } from 'react-redux';
import WorkoutCard from '../components/WorkoutCard';

const Workouts = props => {
    console.log('Props from Workouts ', props);

    return (
        <div className="workouts">
            {/* {props.workouts.map(workout => 
                <WorkoutCard key={workout.id} workout={workout}/>
            )} */}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//        workouts: state.workouts
//     }
// }

export default Workouts;
// connect(mapStateToProps, {})(Workouts)