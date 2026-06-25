import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Transfer from "../screens/transfer/Transfer";
import DashBoard from "../screens/dashboard/DashBoard";

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="DashBoard" component={DashBoard} options={{headerShown: false}}/>
            <Stack.Screen name="Transfer" component={Transfer}/>
        </Stack.Navigator>
    )
};

export default ScreenNavigator;