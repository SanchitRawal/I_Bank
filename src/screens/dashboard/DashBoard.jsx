import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';

const DashBoard = () => {
  const navigation = useNavigation();
  console.log(navigation, 'dasdas');
  const sampleData = [
    {
      name: 'account',
      label: 'Account and Card',
      icon: '',
      screenName: 'AccountAndCard',
    },
    {
      name: 'transfer',
      label: 'Transfer',
      icon: '',
      screenName: 'Transfer',
    },
    {
      name: 'withdraw',
      label: 'Withdraw',
      icon: '',
      screenName: 'WithDraw',
    },
    {
      name: 'mobile',
      label: 'Mobile prepaid',
      icon: '',
      screenName: 'MobilePrepaid',
    },
    {
      name: 'bill',
      label: 'Pay the bill',
      icon: '',
      screenName: 'Transfer',
    },
    {
      name: 'save',
      label: 'Save Online',
      icon: '',
      screenName: 'Transfer',
    },
    {
      name: 'credit',
      label: 'Credit card',
      icon: '',
      screenName: 'Transfer',
    },
    {
      name: 'report',
      label: 'Transaction Report',
      icon: '',
      screenName: 'TransactionReport',
    },
    {
      name: 'beneficiary',
      label: 'Beneficiary',
      icon: '',
      screenName: 'Transfer',
    },
  ];
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
      >
        <View
          style={{
            backgroundColor: '#281C9D',
            borderRadius: 20,
            padding: 20,
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '600',
              }}
            >
              John Smith
            </Text>

            <Text
              style={{
                color: '#E4E4E4',
                fontSize: 14,
                marginTop: 35,
              }}
            >
              Amazon Platinum
            </Text>

            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                marginTop: 10,
                letterSpacing: 2,
              }}
            >
              4756 •••• •••• 9018
            </Text>

            <Text
              style={{
                color: '#fff',
                fontSize: 32,
                fontWeight: '700',
                marginTop: 10,
              }}
            >
              $3,469.52
            </Text>
          </View>

          <Text
            style={{
              position: 'absolute',
              right: 25,
              bottom: 28,
              color: '#fff',
              fontSize: 24,
              fontWeight: '800',
            }}
          >
            VISA
          </Text>
        </View>
        <FlatList
          data={sampleData}
          style={{ flexDirection: 'row' }}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: 'space-evenly',
            gap: 14,
          }}
          contentContainerStyle={{
            gap: 14,
            overflow: 'hidden',
            flex: 1,
            padding: 2,
          }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  width: '30%',
                  backgroundColor: '#fff',
                  borderRadius: 18,
                  paddingVertical: 14,
                  paddingHorizontal: 8,
                  alignItems: 'center',
                  borderRadius: 18,
                  borderWidth: 0,
                  elevation: 4.2,
                  shadowOpacity: 0.1,
                  shadowRadius: 20,
                  gap: 4,
                }}
                onPress={() =>
                  navigation.navigate('ScreenNavigator', {
                    screen: item.screenName,
                  })
                }
              >
                <Ionicons name="wallet-outline" size={24} color="#281C9D" />

                <Text
                  style={{
                    marginTop: 8,
                    textAlign: 'center',
                    color: '#979797',
                    fontSize: 12,
                  }}
                  numberOfLines={2}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default DashBoard;
