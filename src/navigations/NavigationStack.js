import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pages
import { RouteNames } from '../routes/RouteNames';
import HomeScreen from '../screens/HomeScreen';
import { NativeBaseProvider } from 'native-base';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import QueueScreen from '../screens/queue/QueueScreen';
import ProfileServiceProviderScreen from '../screens/profile/ProfileServiceProviderScreen';
import ProfileNormalScreen from '../screens/profile/ProfileNormalScreen';
import QScreen from '../screens/queue/QScreen';
import FavoritesScreen from '../screens/favorites/FavoritesScreen';
import { color } from '../colors/colorList';
import ServicePoviderScreen from '../screens/ServicePovider/ServicePoviderScreen';


const Stack = createNativeStackNavigator();
export function StackSignOut() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                headerMode="screen"
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#4050b5' }, headerTitleAlign: 'center', headerTitleAllowFontScaling: true,
                }}
            >
                <Stack.Screen
                    name={RouteNames.Home}
                    component={HomeScreen}
                    options={{ title: 'JongQ', headerShown: false, }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export function StackSignInActive() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SignIn"
                headerMode="screen"
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#4050b5' }, headerTitleAlign: 'center', headerTitleAllowFontScaling: true,
                }}
            >
                <Stack.Screen
                    name={RouteNames.SignIn}
                    component={SignInScreen}
                    options={{ title: 'JongQ', headerShown: false, }}
                />
                <Stack.Screen
                    name={RouteNames.SignUp}
                    component={SignUpScreen}
                    options={{ title: 'JongQ', headerShown: false, }}
                />
                <Stack.Screen
                    name={RouteNames.Home}
                    component={HomeScreen}
                    options={{ title: 'JongQ', headerShown: false, }}
                />
                <Stack.Screen
                    name={RouteNames.ProfileNormal}
                    component={ProfileNormalScreen}
                    options={{ title: 'JongQ', headerShown: false, }}
                />
                <Stack.Screen
                    name={RouteNames.ProfileServiceProvider}
                    component={ProfileServiceProviderScreen}
                    options={{ title: 'JongQ', headerShown: false, }}
                />
                <Stack.Screen
                    name={RouteNames.Q}
                    component={QScreen}
                    options={{ title: 'นัดหมาย', headerShown: true, headerStyle: { backgroundColor: color.mainColor } }}
                />
                <Stack.Screen
                    name={RouteNames.Queue}
                    component={QueueScreen}
                    options={{ title: 'จองคิว', headerShown: true, headerStyle: { backgroundColor: color.mainColor } }}
                />
                <Stack.Screen
                    name={RouteNames.Favorites}
                    component={FavoritesScreen}
                    options={{ title: 'ร้านโปรด', headerShown: true, headerStyle: { backgroundColor: color.mainColor } }}
                />
                <Stack.Screen
                    name={RouteNames.ServicePovider}
                    component={ServicePoviderScreen}
                    options={{ title: 'คิวนัดหมาย', headerShown: false }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

