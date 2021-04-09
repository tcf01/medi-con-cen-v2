const initialLoginState = {
    userInfo: {
        email: ""
    }
};


const authReducer = (prevState = initialLoginState, action) => {
    switch (action.type) {
        case '@AUTH/LOGIN':
            return {
                ...prevState,
                userInfo: action.payload
            };
        case '@AUTH/LOGOUT':
            return {
                ...prevState,
                userInfo: null
            };
        /*case '@AUTH/REGISTER':
          return {
                        ...prevState,
                        userName: action.id,
                        userToken: action.token,
                    }; */
        default:
            return prevState
    }
};

export default { authReducer, auth: initialLoginState }
