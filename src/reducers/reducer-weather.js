/**
*   AVOID THE STATE MUTATION IN REDUCERS
*/
import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case expression:
        return [ state.payload.data, ...state ];
    default:
        return state;
    }
}
