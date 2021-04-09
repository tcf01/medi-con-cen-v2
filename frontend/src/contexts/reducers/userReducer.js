const initialUserState = {
    consultationRecord: {}
};


const userReducer = (prevState = initialUserState, action) => {
    switch (action.type) {
        case '@USER/RETRIEVE_RECORD':
            return {
                ...prevState,
                consultationRecord: action.payload,
            };
        default:
            return prevState
    }
};

export default { userReducer, user: initialUserState }