import { LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/types";

const initialState = {
    auth: {},
};

export default reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
};