import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PasswordChange = () => {
  const navigation = useNavigation();
  const dataIndexes = ['Recent Password', 'New Password', 'Confirm Password'];
  return (
    <View
      style={{
        flex: 1,
        padding: 28,
      }}
    >
      <View
        style={{
          borderRadius: 20,
          padding: 20,
          gap: 30,
          backgroundColor: '#fff',
        }}
      >
        {dataIndexes.map((elem, index) => (
          <View style={{ gap: 8 }}>
            <Text style={{ color: '#989898', fontSize: 14 }}>{elem}</Text>
            <TextInput
              placeholder={elem}
              style={{
                borderWidth: 1,
                borderRadius: 14,
                borderColor: '#CBCBCB',
              }}
            />
          </View>
        ))}
        <TouchableOpacity
          style={{
            borderRadius: 16,
            padding: 14,
            alignItems: 'center',
            backgroundColor: '#281C9D',
          }}
          onPress={() =>
            navigation.navigate('AppNavigator', { screen: 'Settings' })
          }
        >
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>
            Change Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordChange;
