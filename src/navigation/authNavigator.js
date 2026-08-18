import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/login/SignIn';
import AppNavigator from '../navigation/appNavigator'
import ScreenNavigator from './screenNavigator';
// import SignUp from '../screens/login/SignUp'

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name='AppNavigator' component={AppNavigator} />
      <Stack.Screen name='ScreenNavigator' component={ScreenNavigator}/>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
