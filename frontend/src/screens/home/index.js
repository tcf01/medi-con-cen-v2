import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../../drawers/DrawerContent';
import MainMainTabScreen from '../mainTabs';


const Drawer = createDrawerNavigator()

const HomeScreen = () => {
    return (
        <Drawer.Navigator initialRouteName="HomeDrawer" drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainMainTabScreen} />
        </Drawer.Navigator>
    )
}

export default HomeScreen;