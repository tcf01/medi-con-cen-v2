import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from './login/index.js';
import RegisterScreen from './register/index.js';
import HomeScreen from './../screens/home/index.js';


const RootStack = createStackNavigator();

const RootStackScreen = () => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </RootStack.Navigator>
);

export default RootStackScreen;