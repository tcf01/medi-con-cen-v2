import ACTION  from "../../constants/dispatchActionType"

const initialUserState = {
    consultationRecord: []
};


const userReducer = (prevState = initialUserState, action) => {
    switch (action.type) {
        case ACTION.RETRIEVE_RECORD:
            return {
                ...prevState,
                user: {
                    ...prevState.user,
                    consultationRecord: action.payload
                }
            };
        default:
            return prevState
    }
};

module.exports = {
    user: initialUserState,
    userReducer
}
