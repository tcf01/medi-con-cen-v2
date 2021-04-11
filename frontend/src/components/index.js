import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import RootStackScreen from '../screens';
import HomeScreen from '../screens/home';
import { GlobalContext } from '../contexts/index';


const Components = () => {
    const { globalState } = React.useContext(GlobalContext);

    return (
        <NavigationContainer>
            {globalState.auth.isLogin
                ? <HomeScreen />
                : <RootStackScreen />
            }
        </NavigationContainer>
    )
}

export default Components

