import Ionicons from '@react-native-vector-icons/ionicons';
import { View } from 'react-native';

const Settings = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#281C9D' }}>
      <View
        style={{
          position: 'absolute',
          top: 40,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#fff',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          paddingTop: 55,
          paddingHorizontal: 20,
        }}
      ></View>
      <View
        style={{
          padding: 30,
          borderWidth: 2,
          borderRadius: 50,
          backgroundColor: '#281C9D',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {' '}
        <Ionicons name="person-outline" size={24} color="#fff" />
      </View>
    </View>
  );
};

export default Settings;
