import Ionicons from '@react-native-vector-icons/ionicons/static';
import { FlatList, Text, View } from 'react-native';

const Accounts = () => {
  
  const data = [
    {
      accountNumber: '1900 8988 1234',
      availBalance: '20,000',
      branch: 'New York',
    },
    {
      accountNumber: '8988 1234',
      availBalance: '12,000',
      branch: 'New York',
    },
    {
      accountNumber: '1900 1234 2222',
      availBalance: '230,000',
      branch: 'New York',
    },
  ];

  const AccountDetailUi = ({ item, index }) => {
    return (
      <View
        style={{
          padding: 20,
          borderRadius: 14,
          backgroundColor: '#fff',
          elevation: 7,
          shadowColor: '#B8B3DC',
          shadowOpacity: 0.22,
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowRadius: 20,
          gap: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '700' }}>
            Account {index + 1}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '700' }}>
            {item?.accountNumber}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: '#979797', fontWeight: '500' }}>
            Available Balance
          </Text>
          <Text>$ {item?.availBalance}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: '#979797', fontWeight: '500' }}>Branch</Text>
          <Text>{item?.branch}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        <View
          style={{
            padding: 28,
            borderRadius: 50,
            backgroundColor: '#281C9D',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Ionicons name="person-outline" size={24} color="#fff" />
        </View>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Jhon snow</Text>
      </View>
      <FlatList
        data={data}
        renderItem={AccountDetailUi}
        contentContainerStyle={{ gap: 20, padding: 20 }}
      />
    </View>
  );
};

export default Accounts;
