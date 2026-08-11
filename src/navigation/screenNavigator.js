import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Transfer from "../screens/transfer/Transfer";
import Confirmation from '../screens/confirmation/Confirmation'
import DashBoard from "../screens/dashboard/DashBoard";

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="DashBoard" component={DashBoard} options={{headerShown: false}}/>
            <Stack.Screen name="Transfer" component={Transfer}/>
            <Stack.Screen name="Confirmation" component={Confirmation}/>
        </Stack.Navigator>
    )
};

export default ScreenNavigator;