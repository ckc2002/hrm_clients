import { ActionTypes } from "../contants/action-types";

export const signIn = (curruser) => {

    return {
        type: ActionTypes.SIGN_IN,
        payload: curruser,
    }
}

export const signUp = (user) => {
    console.log(user)
    return {
        type: ActionTypes.SIGN_UP,
        payload: user,
    }
}

export const removeuser = (curruser) => {
    return {
        type: ActionTypes.REMOVE_EMPLOYEE,
        payload: curruser
    }
}

export const active = (value) => {
    return {
        type: ActionTypes.ACTIVE,
        payload: value
    }
}

export const inactive = (value) => {
    return{
        type: ActionTypes.INACTIVE,
        payload:value
    }
}