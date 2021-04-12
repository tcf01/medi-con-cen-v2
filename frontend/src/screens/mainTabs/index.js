import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './home';
import DetailsScreen from './detailScreen';
import { ThemeContext } from '../../styles';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => {
    const { color } = React.useContext(ThemeContext)

    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            barStyle={{ backgroundColor: color.primaryButtonBg }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: color.primaryButtonBg,
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color.primaryTextColor} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={DetailsStackScreen}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarColor: color.primaryButtonBg,
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-notifications" color={color.primaryTextColor} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
};

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => {
    const { color } = React.useContext(ThemeContext)

    return (<HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: color.secondButtonBg,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title: 'Overview',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor={color.secondButtonBg} onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </HomeStack.Navigator>
    )
};

const DetailsStackScreen = ({ navigation }) => {
    const { color } = React.useContext(ThemeContext)

    return (<DetailsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: color.secondButtonBg,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu"
                    size={25}
                    backgroundColor={color.secondButtonBg}
                    onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </DetailsStack.Navigator>
    )
};
