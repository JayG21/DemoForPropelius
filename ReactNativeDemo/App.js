import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteNames} from './src/navigation/routes';
import LoginScreen from './src/loginScreen/loginScreen';
import SignupScreen from './src/signupScreen/signupScreen';
import {Provider as PaperProvider} from 'react-native-paper';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={RouteNames.LOGINSCREEN}>
          <Stack.Screen
            name={RouteNames.LOGINSCREEN}
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={RouteNames.SIGNUPSCREEN}
            component={SignupScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
