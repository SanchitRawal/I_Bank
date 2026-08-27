import { Text, TouchableOpacity, View } from 'react-native';
import Accounts from './components/Accounts';
import Cards from './components/Cards';
import { useState } from 'react';

const AccountAndCard = () => {
  const [isAccount, setIsAccount] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        gap: 18,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 30,
          //   paddingHorizontal: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => setIsAccount(true)}
          style={[
            {
              flex: 1,
              padding: 10,
              borderRadius: 14,
              alignItems: 'center',
              backgroundColor: '#F2F1F9',
            },
            isAccount && { backgroundColor: '#281C9D' },
          ]}
        >
          <Text
            style={[
              { fontWeight: '600', fontSize: 16, color: '#000' },
              isAccount && { color: '#fff' },
            ]}
          >
            Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsAccount(false)}
          style={[
            {
              flex: 1,
              padding: 10,
              borderRadius: 14,
              alignItems: 'center',
              backgroundColor: '#F2F1F9',
            },
            !isAccount && { backgroundColor: '#281C9D' },
          ]}
        >
          <Text
            style={[
              { fontWeight: '600', fontSize: 16, color: '#000' },
              !isAccount && { color: '#fff' },
            ]}
          >
            Cards
          </Text>
        </TouchableOpacity>
      </View>
      {isAccount ? <Accounts /> : <Cards />}
    </View>
  );
};

export default AccountAndCard;
