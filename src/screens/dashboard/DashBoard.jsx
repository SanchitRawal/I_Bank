import { Text, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

const DashBoard = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#281C9D' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 22,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Ionicons name="person-outline" size={24} color="#fff" />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              paddingBottom: 15,
              paddingTop: 10,
              fontWeight: '400',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Hi, John Doe
          </Text>
        </View>
        <Ionicons name="notifications-outline" color="#fff" size={28} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          borderTopRightRadius: 38,
          borderTopLeftRadius: 38,
          padding: 20,
          gap: 14,
        }}
      ></View>
    </View>
  );
};

export default DashBoard;
