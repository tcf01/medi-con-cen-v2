import ACTION from "../../constants/dispatchActionType"

const initialLoginState = {
    isLogin: false,
    userInfo: {
        id: "",
        email: "",
        clinicName: ""
    }
};

const authReducer = (prevState = initialLoginState, action) => {
    switch (action.type) {
        case ACTION.LOGIN:
            return {
                ...prevState,
                auth: {
                    ...prevState.auth,
                    isLogin: true, 
                    userInfo: action.payload
                }
            };
        case ACTION.LOGOUT:
            return {
                ...prevState,
                auth: {
                    ...prevState.auth,
                    isLogin: false,
                    userInfo: {}
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
