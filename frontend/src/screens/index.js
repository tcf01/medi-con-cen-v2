import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import RegisterScreen from './register/index.js';
import SplashScreen from './splash/index.js';


const RootStack = createStackNavigator();

const RootStackScreen = () => (
    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="HomeScreen" component={SplashScreen} />
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </RootStack.Navigator>
);

export default RootStackScreen;