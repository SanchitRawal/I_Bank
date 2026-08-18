import Ionicons from '@react-native-vector-icons/ionicons';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();

  const labels = [
    { title: 'Password', nav: 'PasswordChange' },
    { title: 'Touch Id', nav: 'TouchId' },
    { title: 'Language', nav: 'Language' },
    { title: 'App Information', nav: 'AppInfo' },
    { title: 'CustomerCare', nav: 'CustomerCare' },
  ];
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
      <View style={{ alignItems: 'center', gap: 10 }}>
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
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            letterSpacing: 0.3,
            color: '#281C9D',
          }}
        >
          Jhon Doe
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ gap: 20 }} style={{ padding: 20 }}>
        {labels?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('ScreenNavigator', { screen: item?.nav })
              }
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                paddingBottom: 10,
                borderColor: '#ECECEC',
              }}
            >
              <Text style={{ fontSize: 18 }}>{item?.title}</Text>
              {item === 'CustomerCare' ? (
                <Text style={{ color: '#979797', fontWeight: '500' }}>
                  1800000035
                </Text>
              ) : (
                <Ionicons
                  name="arrow-forward"
                  size={20}
                  color={'#ECECEC'}
                  style={{ fontWeight: '700' }}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Settings;
