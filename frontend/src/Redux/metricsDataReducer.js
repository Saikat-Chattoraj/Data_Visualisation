import { GET_METRICS_DATA_FAILURE, GET_METRICS_DATA_REQUEST, GET_METRICS_DATA_SUCCESS } from "./actionType";


const initState = {
    item:[]
}

const reducer = (state = initState, {type,payload}) => {
    switch(type) {
        case GET_METRICS_DATA_REQUEST:
            return {
                ...state,
            }
        case GET_METRICS_DATA_SUCCESS:
            return {
                item:payload
            }
        case GET_METRICS_DATA_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default reducer