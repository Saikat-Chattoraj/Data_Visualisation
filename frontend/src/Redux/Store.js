import { applyMiddleware, combineReducers, createStore,compose } from "redux";
import thunk from "redux-thunk";
import metricsReducer from "./Reducer";
import metricsDataReducer from "./metricsDataReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({metrics:metricsReducer,metricItems:metricsDataReducer});

export const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )