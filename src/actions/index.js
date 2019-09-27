import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_WORKOUTS_START = "GET_WORKOUTS_START";
export const GET_WORKOUTS_SUCCESS = "GET_WORKOUTS_SUCCESS";
export const GET_WORKOUTS_FAILURE = "GET_WORKOUTS_FAILURE";

export const ADD_EXERCISE_START = "ADD_EXERCISE_START";
export const ADD_EXERCISE_SUCCESS = "ADD_EXERCISE_SUCCESS";
export const ADD_EXERCISE_FAILURE = "ADD_EXERCISE_FAILURE";

export const SUBMIT_WORKOUT_START = "SUBMIT_WORKOUT_START";
export const SUBMIT_WORKOUT_SUCCESS = "SUBMIT_WORKOUT_SUCCESS";
export const SUBMIT_WORKOUT_FAILURE = "SUBMIT_WORKOUT_FAILURE";

export const EDIT_EXERCISE_START = "EDIT_EXERCISE_START";
export const EDIT_EXERCISE_SUCCESS = "EDIT_EXERCISE_SUCCESS";
export const EDIT_EXERCISE_FAILURE = "EDIT_EXERCISE_FAILURE";

export const DELETE_WORKOUT_START = "DELETE_WORKOUT_START";
export const DELETE_WORKOUT_SUCCESS = "DELETE_WORKOUT_SUCCESS";
export const DELETE_WORKOUT_FAILURE = "DELETE_WORKOUT_FAILURE";

export const getWorkouts = () => dispatch => {
    dispatch({ type: GET_WORKOUTS_START })
    axiosWithAuth()
        .get('/workouts')
            .then(res => {
                dispatch({ type: GET_WORKOUTS_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: GET_WORKOUTS_FAILURE, payload: `${err.response.status}: ${err.response.data}` });
            })
}

export const addExercise = exercise => dispatch => {
    dispatch({ type: ADD_EXERCISE_START })
    axiosWithAuth() 
        .post('/workouts/{workoutId}', exercise)
            .then(res => {
                dispatch({ type: ADD_EXERCISE_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: ADD_EXERCISE_FAILURE, payload: `${err.response.status}: ${err.response.data}`})
            })
}

export const submitWorkout = workout => dispatch => {
    dispatch({ type: SUBMIT_WORKOUT_START })
    axiosWithAuth()
        .post('/workouts', workout) 
            .then(res => {
                dispatch({ type: SUBMIT_WORKOUT_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: SUBMIT_WORKOUT_FAILURE, payload: `${err.response.status}: ${err.response.data}`})
            })
}

// export const editExercise = workout => dispatch => {
//     dispatch({ type: EDIT_EXERCISE_START })
//     axiosWithAuth(workout)
//         .put(`workouts/{workoutId}/${exerciseToEdit}`)
//         .then(res => {
//             ...workout.filter(exercise => exercise.id !== exerciseToEdit.id),
//         })
//         .catch(err => console.log(err))
// }

// ^ commented out because it's wrong and will break everything, not sure how to fix yet

export const deleteWorkout = workout => dispatch => {
    dispatch({ type: DELETE_WORKOUT_START})
    axiosWithAuth()
        .delete('/workouts/{workoutid}', workout)
            .then(res => {
                dispatch({ type: DELETE_WORKOUT_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: DELETE_WORKOUT_FAILURE, payload: `${err.respose.status}: ${err.response.data}`})
            })
}