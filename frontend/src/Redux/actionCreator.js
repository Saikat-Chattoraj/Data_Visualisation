import { GET_METRICS_DATA_FAILURE, GET_METRICS_DATA_REQUEST, GET_METRICS_DATA_SUCCESS, GET_METRICS_FAILURE, GET_METRICS_REQUEST, GET_METRICS_SUCCESS } from "./actionType";
import axios from "axios"

export const getMetricsRequest = () => ({
    type: GET_METRICS_REQUEST
  });
  
  export const getMetricsSuccess = (payload) => ({
    type: GET_METRICS_SUCCESS,
    payload
  });
  
  export const getMetricsFailure = (payload) => ({
    type: GET_METRICS_FAILURE,
    payload
  });


  export const getMetrics = () => (dispatch) => {
      dispatch(getMetricsRequest())
    return axios({
        method:"GET",
        url:"http://localhost:5000/metrics",
    })
    .then(res => {
        console.log(res.data.metrics)
        dispatch(getMetricsSuccess(res.data.metrics))
    })
    .catch(err => {
        console.log(err)
        dispatch(getMetricsFailure(err))
    })
  }

  export const getMetricsDataRequest = () => ({
    type: GET_METRICS_DATA_REQUEST
  });
  
  export const getMetricsDataSuccess = (payload) => ({
    type: GET_METRICS_DATA_SUCCESS,
    payload
  });
  
  export const getMetricsDataFailure = (payload) => ({
    type: GET_METRICS_DATA_FAILURE,
    payload
  });


  export const getMetricItemData = (measure) => (dispatch) => {
      dispatch(getMetricsDataRequest())
    return axios({
        method:"GET",
        url:`http://localhost:5000/metrics_data/${measure}`,
    })
    .then(res => {
        console.log(res.data)
        dispatch(getMetricsDataSuccess(res.data))
    })
    .catch(err => {
        console.log(err)
        dispatch(getMetricsDataFailure(err))
    })
  }