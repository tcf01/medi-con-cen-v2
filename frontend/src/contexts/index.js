import React from 'react';
import { useAppReducer } from './reducers/index.js';

export const GlobalContext = React.createContext();

const StoreProvider = ({ children }) => {
    const [globalState, globalDispatch] = useAppReducer();

    return (
        <GlobalContext.Provider value={{ globalState, globalDispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default StoreProvider;
