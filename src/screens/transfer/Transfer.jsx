import Ionicons from '@react-native-vector-icons/ionicons';
import { useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const Transfer = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const [amount, setAmount] = useState('');
  const [contact, setContact] = useState('');

  const [isChecked, setIsChecked] = useState(false);
  const sampleData = [
    {
      label: 'Transfer via card number',
      icon: <Ionicons name="wallet-outline" size={50} color="#281C9D" />,
    },
    {
      label: 'Transfer to some bank',
      icon: <Ionicons name="wallet-outline" size={50} color="#281C9D" />,
    },
    {
      label: 'Transfer to another bank',
      icon: <Ionicons name="wallet-outline" size={50} color="#281C9D" />,
    },
  ];
  const sampleContactData = [
    {
      label: 'Emma',
      icon: <Ionicons name="person-outline" size={50} color="#281C9D" />,
    },
    {
      label: 'Emma',
      icon: <Ionicons name="person-outline" size={50} color="#281C9D" />,
    },
    {
      label: 'Emma',
      icon: <Ionicons name="person-outline" size={50} color="#281C9D" />,
    },
  ];
  const userAccountDetails = [
    { label: 'Name', setState: setName, value: name },
    { label: 'Card Number', setState: setCardNumber, value: cardNumber },
    { label: 'Amount', setState: setAmount, value: amount },
    { label: 'Contact', setState: setContact, value: contact },
  ];
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ gap: 20, padding: 20 }}
    >
      <TextInput
        style={{
          borderWidth: 1,
          borderRadius: 16,
          color: '#000',
          fontSize: 16,
          borderColor: '#CBCBCB',
          padding: 14,
        }}
        placeholder="Choose account/card"
        placeholderTextColor={'#CACACA'}
      />
      <View style={{ gap: 20 }}>
        <Text style={{ fontSize: 16, color: '#979797', fontWeight: '500' }}>
          Choose Transaction
        </Text>
        <FlatList
          data={sampleData}
          horizontal
          contentContainerStyle={{ gap: 20 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: '#EAEAEA',
                  borderRadius: 18,
                  paddingVertical: 16,
                  paddingHorizontal: 16,
                  width: '10%',
                  minWidth: '20%',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  gap: 6,
                }}
              >
                {item.icon}
                <Text
                  numberOfLines={2}
                  style={{
                    textAlign: 'left',
                    // color: '#fff',
                    fontSize: 16,
                  }}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ gap: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#979797', fontWeight: '500', fontSize: 16 }}>
            Choose Beneficiary
          </Text>
          <Text style={{ color: '#281C9D', fontWeight: '500', fontSize: 16 }}>
            Find Beneficiary
          </Text>
        </View>
        <FlatList
          data={sampleContactData}
          horizontal
          contentContainerStyle={{ gap: 20, flexGrow: 1 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: '#EAEAEA',
                  borderRadius: 18,
                  paddingVertical: 16,
                  paddingHorizontal: 16,
                  width: '10%',
                  minWidth: '32%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                }}
              >
                {item.icon}
                <Text
                  numberOfLines={2}
                  style={{
                    // marginTop: 10,
                    textAlign: 'left',
                    // color: '#fff',
                    fontSize: 16,
                  }}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Shadow
        distance={8}
        startColor="rgba(0,0,0,0.130)"
        offset={[0, 2]}
        radius={16}
      >
        <View
          style={{
            borderRadius: 16,
            padding: 20,
            gap: 20,
            backgroundColor: '#fff',
          }}
        >
          {userAccountDetails.map((elem, index) => {
            return (
              <TextInput
                key={index}
                style={{
                  borderWidth: 1,
                  borderRadius: 16,
                  color: '#000',
                  fontSize: 16,
                  borderColor: '#CBCBCB',
                  padding: 14,
                }}
                value={elem.value}
                onChangeText={e => elem.setState(e)}
                placeholder={elem.label}
                placeholderTextColor={'#CACACA'}
              />
            );
          })}
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
            <TouchableWithoutFeedback onPress={() => setIsChecked(!isChecked)}>
              <Ionicons
                name={isChecked ? 'checkbox' : 'square-outline'}
                size={24}
                color="#281C9D"
              />
            </TouchableWithoutFeedback>
            <Text style={{ fontSize: 16, color: '#979797' }}>
              Save to directory of beneficiary{' '}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 16,
              padding: 14,
              alignItems: 'center',
              backgroundColor: '#281C9D',
            }}
          >
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </Shadow>
    </ScrollView>
  );
};

export default Transfer;
