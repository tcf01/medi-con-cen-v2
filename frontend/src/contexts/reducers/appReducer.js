import ACTION from "../../constants/dispatchActionType"

const initialAppState = {
    isLoading: true,
    isModalOpen: false,
    error: ""
};

const appReducer = (prevState = initialAppState, action) => {
    switch (action.type) {
        case ACTION.SET_LOADING_FINISH:
            return {
                ...prevState,
                app: {
                    ...prevState.app,
                    isLoading: false
                }
            };
        case ACTION.SET_LOADING:
            return {
                ...prevState,
                app: {
                    ...prevState.app,
                    isLoading: true
                }
            };
        case ACTION.SET_MODAL_OPEN:
            return {
                ...prevState,
                app: {
                    ...prevState.app,
                    isModalOpen: true
                }
            };
        case ACTION.SET_MODAL_CLOSE:
            return {
                ...prevState,
                app: {
                    ...prevState.app,
                    isModalOpen: false
                }
            };
        case ACTION.SET_ERROR_MSG:
            return {
                ...prevState,
                app: {
                    ...prevState.app,
                    error: action.payload
                }
            };
        default:
            return prevState
    }
};

module.exports = {
    app: initialAppState,
    appReducer
}
