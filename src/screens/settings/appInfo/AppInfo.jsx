import { Text, View } from 'react-native';

const AppInfo = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        gap: 14,
        padding: 10,
        paddingTop: 40,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: '600' }}>
          CaBank E-mobile Banking
        </Text>
      </View>
      <View style={{ gap: 14, paddingHorizontal: 12 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderColor: '#ECECEC',
            paddingVertical: 10,
            marginHorizontal: 6,
          }}
        >
          <Text style={{ fontSize: 16 }}>Date of manufacture</Text>
          <Text style={{ fontSize: 16, color: '#281C9D', fontWeight: '700' }}>
            Dec 2019
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderColor: '#ECECEC',
            paddingVertical: 10,
            marginHorizontal: 6,
          }}
        >
          <Text style={{ fontSize: 16 }}>Version</Text>
          <Text style={{ fontSize: 16, color: '#281C9D', fontWeight: '700' }}>
            9.0.2
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderColor: '#ECECEC',
            paddingVertical: 10,
            marginHorizontal: 6,
          }}
        >
          <Text style={{ fontSize: 16 }}>Language</Text>
          <Text style={{ fontSize: 16, color: '#281C9D', fontWeight: '700' }}>
            English
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AppInfo;
