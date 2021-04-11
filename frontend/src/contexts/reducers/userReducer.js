import ACTION  from "../../constants/dispatchActionType"

const initialUserState = {
    consultationRecords: []
};


const userReducer = (prevState = initialUserState, action) => {
    switch (action.type) {
        case ACTION.SET_CONSULTATION_RECORD:
            return {
                ...prevState,
                user: {
                    ...prevState.user,
                    consultationRecords: action.payload
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
