import { ActionTypes } from "../contants/action-types";

const initialState = {
    user: [],
    currusre: "",
    active_state: ''
}



export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SIGN_IN:
            return { ...state, currusre: payload, active_state: false }
        case ActionTypes.SIGN_UP:
            return { ...state, user: [...state.user, payload] }
        case ActionTypes.VIEW_EMPLOYEE:
            return {}
        case ActionTypes.ADD_EMPPLOYEE:
            return { ...state, addemp: true }
        case ActionTypes.REMOVE_EMPLOYEE:
            return { ...state, user: [] }
        case ActionTypes.ACTIVE:
            return { ...state, active_state: true }
        case ActionTypes.INACTIVE:
            return { ...state, active_state: false }
        // return {...state, user : state.user.filter((e) => e.username !== payload.username)}
        default:
            return state;
    }
}