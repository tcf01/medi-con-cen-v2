import ACTION from "../../constants/dispatchActionType"

const initialLoginState = {
    userInfo: {
        id: "",
        email: ""
    }
};

const authReducer = (prevState = initialLoginState, action) => {
    switch (action.type) {
        case ACTION.LOGIN:
            return {
                ...prevState,
                auth: {
                    ...prevState.auth,
                    userInfo: action.payload
                }
            };
        case ACTION.LOGOUT:
            return {
                ...prevState,
                auth: {
                    ...prevState.auth,
                    userInfo: null
                }
            };
        default:
            return prevState
    }
};

module.exports = {
    auth: initialLoginState,
    authReducer
}
