import {
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import Confirmation from '../confirmation/Confirmation';
import ConfirmImg from '../../assets/mainIcons/confirmImage.svg';
import { useState } from 'react';
import Ionicons from '@react-native-vector-icons/ionicons/static';

const WithDraw = () => {
  const [isVerify, setIsVerify] = useState(false);
  const [phnNumber, setPhnNumber] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const acctNumbers = [
    '1900 8988 5456',
    '1900 8112 5222',
    '4411 0000 1234',
    '1900 8988 5456',
    '1900 8988 5456',
  ];

  const amtValues = ['$10', '$50', '$100', '$150', '$200', 'Other'];
  const renderAccts = ({ item, index }) => {
    const isSelected = selectedAccount === item;

    return (
      <TouchableOpacity
        key={item + index}
        onPress={() => setSelectedAccount(item)}
        style={{
          padding: 16,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ width: 20 }} />

        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: '#000',
          }}
        >
          {item}
        </Text>

        {isSelected ? (
          <Ionicons name="checkmark" size={20} color="#281C9D" />
        ) : (
          <View style={{ width: 20 }} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          padding: 20,
          gap: 20,
        }}
      >
        <ConfirmImg />

        <TouchableOpacity
          style={{
            borderWidth: 1,
            padding: 12,
            borderRadius: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onPress={() => setIsVerify(true)}
        >
          <Text></Text>
          <Ionicons name="chevron-down" size={20} />
        </TouchableOpacity>

        <TextInput
          style={{ borderWidth: 1, borderRadius: 16 }}
          placeholder="Phone Number"
          onChangeText={setPhnNumber}
          value={phnNumber}
        />

        <View style={{ gap: 16 }}>
          <Text>Choose Amount</Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 20,
              rowGap: 22,
            }}
          >
            {amtValues.map(amount => (
              <TouchableOpacity
                key={amount}
                onPress={() => setSelectedAmount(amount)}
                style={{
                  flex: 1,
                  minWidth: '24%',
                  padding: 16,
                  borderWidth: 1,
                  borderRadius: 16,
                  alignItems: 'center',
                  // justifyContent: 'center',
                }}
              >
                <Text>{amount}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            padding: 8,
            borderRadius: 20,
            backgroundColor: '#281C9D',
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>
            Verify
          </Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isVerify} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            padding: 20,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <View
            style={{ backgroundColor: '#fff', padding: 8, borderRadius: 26 }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View style={{ flex: 0.6 }} />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  fontWeight: '700',
                  // flex: 1,
                }}
              >
                Choose Account:
              </Text>
              <TouchableOpacity
                onPress={() => setIsVerify(false)}
                style={{ padding: 12 }}
              >
                <Ionicons name="close" size={26} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={acctNumbers}
              renderItem={renderAccts}
              keyExtractor={(item, index) => `${item}-${index}`}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default WithDraw;
