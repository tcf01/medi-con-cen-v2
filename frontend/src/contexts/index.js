import React from 'react';
import { useAppReducer } from './reducers/index.js';

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    const [globalState, globalDispatch] = useAppReducer();

    return (
        <StoreContext.Provider value={{ globalState, globalDispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
