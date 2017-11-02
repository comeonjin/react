import {combineReducers} from "redux";
import {reducer as indexReducer} from "../pages/index/";

export default combineReducers({
    index: indexReducer
});