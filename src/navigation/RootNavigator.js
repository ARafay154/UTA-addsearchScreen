import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREEN, TAB } from '../data/enums'
import { ChangePasswordScreen, ChatScreen, CreateRideScreen, LoginScreen, PayoutMethodScreen, RiderDetailScreen, SearchCounterScreen, SearchGoingToScreen, SearchLeavingFoamScreen, SignUpScreen, SplashScreen } from '../screens'
import BottomNavigator from './BottomNavigator'

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name={SCREEN.SPLASH} component={SplashScreen} />
                <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen} />
                <Stack.Screen name={SCREEN.SIGN_UP} component={SignUpScreen} />
                <Stack.Screen name={TAB.BOTTOM} component={BottomNavigator} />
                <Stack.Screen name={SCREEN.CHANGE_PASSWORD} component={ChangePasswordScreen} />
                <Stack.Screen name={SCREEN.PAYOUT_METHOD} component={PayoutMethodScreen} />
                <Stack.Screen name={SCREEN.GOING_FROM} component={SearchLeavingFoamScreen} />
                <Stack.Screen name={SCREEN.GOING_TO} component={SearchGoingToScreen} />
                <Stack.Screen name={SCREEN.SEARCH_COUNTER} component={SearchCounterScreen} />
                <Stack.Screen name={SCREEN.CREATE_RIDE} component={CreateRideScreen} />
                <Stack.Screen name={SCREEN.RIDER_DETAIL} component={RiderDetailScreen} />
                <Stack.Screen name={SCREEN.CHAT} component={ChatScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator
