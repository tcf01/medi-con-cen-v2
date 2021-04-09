const initialAppState = {
    isLoading: true
};


const appReducer = (prevState = initialAppState, action) => {
    switch (action.type) {
        case '@@APP/CHANGE_LOADING':
            return {
                ...prevState,
                isLoading: action.payload
            };
        default:
            return prevState
    }
};

export default {
    app: initialAppState,
    appReducer
}
