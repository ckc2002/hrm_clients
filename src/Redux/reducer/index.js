import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    alluser: userReducer
});

export default rootReducer;