import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/login/SignIn';
import DashBoard from '../screens/dashboard/DashBoard';
// import SignUp from '../screens/login/SignUp'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashBoard" component={DashBoard} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
