import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pages
import { RouteNams } from './src/routes/RouteNames';
import HomeScreen from './src/screens/HomeScreen';
import { NativeBaseProvider } from 'native-base';
import SigninScreen from './src/screens/auth/SigninScreen';
import BookScreen from './src/screens/book/BookScreen';
const Stack = createNativeStackNavigator();


function App() {

  return (
    <NativeBaseProvider>
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
            name={RouteNams.SignIn}
            component={SigninScreen}
            options={{ title: 'JongQ', headerShown: false, }}
          />
          <Stack.Screen
            name={RouteNams.Home}
            component={HomeScreen}
            options={{ title: 'JongQ', headerShown: false, }}
          />
          <Stack.Screen
            name={RouteNams.Book}
            component={BookScreen}
            options={{ title: 'JongQ', headerShown: false, }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App;
