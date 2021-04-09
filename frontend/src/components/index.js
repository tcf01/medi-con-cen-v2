import React from 'react'
import { StoreContext } from '../contexts/index';

import RootStackScreen from '../screens/index';
import { NavigationContainer } from '@react-navigation/native';

const Components = () => {
    const { state: globalState, dispatch: globalDispatch } = React.useContext(StoreContext);
    console.log(globalState, globalDispatch)

    return (
        <NavigationContainer>
            <RootStackScreen />
        </NavigationContainer>
    )
}

export default Components
