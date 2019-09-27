import {
    GET_WORKOUTS_START,
    GET_WORKOUTS_SUCCESS,
    GET_WORKOUTS_FAILURE,
    ADD_EXERCISE_START,
    ADD_EXERCISE_SUCCESS,
    ADD_EXERCISE_FAILURE,
    SUBMIT_WORKOUT_START,
    SUBMIT_WORKOUT_SUCCESS,
    SUBMIT_WORKOUT_FAILURE,
    EDIT_EXERCISE_START,
    EDIT_EXERCISE_SUCCESS,
    EDIT_EXERCISE_FAILURE,
    DELETE_WORKOUT_START,
    DELETE_WORKOUT_SUCCESS,
    DELETE_WORKOUT_FAILURE
} from '../actions/index';

const initialState = {
    workouts: [],
    error: '',
    isFetching: false
}

export const reducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch(action.type) {
        case GET_WORKOUTS_START: 
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case GET_WORKOUTS_SUCCESS: 
            return {
                ...state,
                error: '',
                isFetching: false,
                workouts: action.payload
            };
        case GET_WORKOUTS_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        case ADD_EXERCISE_START: 
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case ADD_EXERCISE_SUCCESS: 
            return {
                ...state,
                error: '',
                isFetching: false,
                exercises: action.payload
            }
        case ADD_EXERCISE_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case SUBMIT_WORKOUT_START: 
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case SUBMIT_WORKOUT_SUCCESS: 
            return {
                ...state,
                error: '',
                isFetching: false,
                workouts: action.payload
            }
        case SUBMIT_WORKOUT_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        // not doing edit yet because I feel like that's different
        case DELETE_WORKOUT_START: 
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case DELETE_WORKOUT_SUCCESS: 
            return {
                ...state,
                error: '',
                isFetching: false,
                workouts: action.paylaod
            }
        case DELETE_WORKOUT_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
    }
}