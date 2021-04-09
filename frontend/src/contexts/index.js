import React from 'react';
import { useAppReducer } from './reducers/index.js';

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useAppReducer();

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
