import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Transfer from "../screens/transfer/Transfer";
import Confirmation from '../screens/confirmation/Confirmation'
import DashBoard from "../screens/dashboard/DashBoard";
import AppInfo from "../screens/settings/appInfo/AppInfo"
import PasswordChange from "../screens/settings/forgetPass/PasswordChange";
import TransactionReport from "../screens/transactionReport/TransactionReport"

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
    console.log('working screen navigator')
    return(
        <Stack.Navigator>
            <Stack.Screen name="Transfer" component={Transfer}/>
            <Stack.Screen name="TransactionReport" component={TransactionReport}/>
            <Stack.Screen name="Confirmation" component={Confirmation}/>
            <Stack.Screen name="AppInfo" component={AppInfo}/>
            <Stack.Screen name="PasswordChange" component={PasswordChange}/>
        </Stack.Navigator>
    )
};

export default ScreenNavigator;