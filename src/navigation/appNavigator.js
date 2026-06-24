import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/login/SignIn';
import DashBoard from '../screens/dashboard/DashBoard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/search/Search';
import Messages from '../screens/messages/Messages';
import Settings from '../screens/settings/Settings';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

// import SignUp from '../screens/login/SignUp'

const Stack = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Search':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'Messages':
              iconName = focused ? 'mail' : 'mail-outline';
              break;
            case 'Settings':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
          }

          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#281C9D' : 'transparent',
                borderRadius: 50,
                paddingHorizontal: focused ? 12 : 0,
                height: 50,
                width: 90,
              }}
            >
              <Ionicons
                name={iconName}
                size={20}
                color={focused ? '#fff' : '#9E9E9E'}
              />

              {focused && (
                <Text
                  style={{
                    color: '#fff',
                    marginLeft: 6,
                    fontSize: 12,
                  }}
                >
                  {route.name}
                </Text>
              )}
            </View>
          );
        },

        tabBarStyle: {
          height: 70,
          backgroundColor: '#F2F2F2',
          paddingHorizontal: 10,
        },

        tabBarItemStyle: {
          marginVertical: 16,
        },
        tabBarButton: props => (
          <TouchableOpacity {...props} activeOpacity={1} />
        ),
      })}
    >
      <Stack.Screen name="Home" component={DashBoard} />
      <Stack.Screen
        name="Search"
        component={Search}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: {backgroundColor: "#F2F2F20", borderBottomWidth: 0, elevation: 0},
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
