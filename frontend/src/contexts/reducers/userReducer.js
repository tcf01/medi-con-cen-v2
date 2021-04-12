import ACTION from "../../constants/dispatchActionType"

const initialUserState = {
    consultationRecords: {
        data: [],
        length: 0
    }
};


const userReducer = (prevState = initialUserState, action) => {
    switch (action.type) {
        case ACTION.SET_CONSULTATION_RECORD:
            return {
                ...prevState,
                user: {
                    ...prevState.user,
                    consultationRecords: {
                        data: action.payload.records,
                        recordsLength: action.payload.length
                    }
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
