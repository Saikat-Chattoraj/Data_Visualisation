import { GET_METRICS_FAILURE, GET_METRICS_REQUEST, GET_METRICS_SUCCESS } from "./actionType";


const initState = {
    metrics:[]
}

const reducer = (state = initState, {type,payload}) => {
    switch(type) {
        case GET_METRICS_REQUEST:
            return {
                ...state,
            }
        case GET_METRICS_SUCCESS:
            return {
                ...state,
                metrics:payload
            }
        case GET_METRICS_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default reducer