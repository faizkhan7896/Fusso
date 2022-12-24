import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Onboarding from './src/screens/Onboarding';
import MainScreen from './src/screens/MainScreen';
import Listing from './src/screens/Listing';
import Success from './src/screens/Success';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, orientation: 'portrait'}}
        initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Listing" component={Listing} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
