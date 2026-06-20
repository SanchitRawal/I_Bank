import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/authNavigator';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#281C9D'}/>
      <SafeAreaView style={{ flex: 1 }}>
      <AuthNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
