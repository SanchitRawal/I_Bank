import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Transfer from "../screens/transfer/Transfer";
import Confirmation from '../screens/confirmation/Confirmation'
import DashBoard from "../screens/dashboard/DashBoard";
import AppInfo from "../screens/settings/appInfo/AppInfo"

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
    console.log('working screen navigator')
    return(
        <Stack.Navigator>
            <Stack.Screen name="Transfer" component={Transfer}/>
            <Stack.Screen name="Confirmation" component={Confirmation}/>
            <Stack.Screen name="AppInfo" component={AppInfo}/>
        </Stack.Navigator>
    )
};

export default ScreenNavigator;