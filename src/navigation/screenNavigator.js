import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Transfer from "../screens/transfer/Transfer";
import Confirmation from '../screens/confirmation/Confirmation'
import DashBoard from "../screens/dashboard/DashBoard";
import AppInfo from "../screens/settings/appInfo/AppInfo"
import PasswordChange from "../screens/settings/forgetPass/PasswordChange";
import TransactionReport from "../screens/transactionReport/TransactionReport"
import AccountAndCard from "../screens/account&card/AccountAndCard";
import WithDraw from '../screens/withdraw/Withdraw';
import MobilePrepaid from '../screens/mobileprepaid/MobilePrepaid';
import PayBill from '../screens/payBill/PayBill';

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
            <Stack.Screen name="AccountAndCard" component={AccountAndCard}/>
            <Stack.Screen name="WithDraw" component={WithDraw}/>
            <Stack.Screen name="MobilePrepaid" component={MobilePrepaid}/>
            <Stack.Screen name="PayBill" component={PayBill}/>
        </Stack.Navigator>
    )
};

export default ScreenNavigator;