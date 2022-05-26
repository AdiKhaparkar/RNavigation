import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import { ProfileScreen,HomeScreen } from '../Screens';

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={navigationStrings.HomeScreen}>
                <Stack.Screen name={navigationStrings.HOME} component={HomeScreen} />
                <Stack.Screen name={navigationStrings.PROFILE} component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        );
    };


    export default Routes;