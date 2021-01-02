import { combineReducers } from 'redux';
import { dataConfigsReducers } from "./dataConfigsReducers";

export default combineReducers({
    pageConfigs: dataConfigsReducers
});