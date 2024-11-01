import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen01 from './components/Login'
import Screen02 from './components/ElectronicsScreen'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Screen1'>
      <Stack.Screen name="Login" component={Screen01} />
      <Stack.Screen name="ElectronicsScreen" component={Screen02} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}