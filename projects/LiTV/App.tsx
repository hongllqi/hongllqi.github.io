import * as React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from './screens/LoginScreen';
import 'react-native/tvos-types.d';
import registerScreen from './screens/RegisterScreen';
import catalogScreen from './screens/CatalogScreen';

const Stack = createNativeStackNavigator();

// Container de navegação
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={loginScreen}
          options={{title: 'LiTV'}}
        />
        <Stack.Screen
          name="Registro"
          component={registerScreen}
          options={{title: 'LiTV'}}
        />
        <Stack.Screen
          name="Catalogo"
          component={catalogScreen}
          options={{title: 'LiTV'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: 'black',
    text: 'red'
  },
};

export default App;