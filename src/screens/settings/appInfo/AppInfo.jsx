import { Text, View } from 'react-native';

const AppInfo = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', gap: 14 }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>CaBank E-mobile Banking</Text>
        <View style={{flex:1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text>Date of manufacture</Text>
            <Text>Dec 2019</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text>Version</Text>
            <Text>9.0.2</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text>Language</Text>
            <Text>English</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AppInfo;
