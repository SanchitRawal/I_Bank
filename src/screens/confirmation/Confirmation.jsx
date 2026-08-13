import { useMemo, useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ConfirmImg from '../../assets/mainIcons/confirmImage.svg';

const Confirmation = () => {
  const navigation = useNavigation();
  const [isConfirm, setIsConfirm] = useState(false);

  const formData = [
    {
      label: 'From',
      key: 'from',
      type: 'InputField',
    },
    {
      label: 'To',
      key: 'to',
      type: 'InputField',
    },
    {
      label: 'Beneficiary',
      key: 'beneficiary',
      type: 'InputField',
    },
    {
      label: 'Card Number',
      key: 'cardNumber',
      type: 'InputField',
    },
    {
      label: 'Transaction Fee',
      key: 'transactionFee',
      type: 'InputField',
    },
    {
      label: 'Note',
      key: 'note',
      type: 'InputField',
    },
    {
      label: 'Amount',
      key: 'amount',
      type: 'InputField',
    },
  ];

  const [formValues, setFormValues] = useState({});

  const handleChanges = (key, value) => {
    setFormValues(prev => ({
      ...prev,
      [key]: value,
    }));
  };
  const formInputs = useMemo(() => {
    return JSON.stringify(formValues);
  }, [formValues]);
  console.log(formInputs, 'dadsa');
  const formDesign = ({ item, index }) => {
    console.log(item);
    return (
      <View style={{ gap: 10 }}>
        <Text style={{ fontSize: 16, color: '#979797' }}>{item.label}</Text>
        {item?.type === 'InputField' && (
          <TextInput
            style={{ borderWidth: 1, borderRadius: 16, borderColor: '#CBCBCB' }}
            value={formValues[item.key] || ''}
            onChangeText={value => handleChanges(item.key, value)}
          />
        )}
      </View>
    );
  };

  const transferSuccess = () => {
    return (
      <View style={{ gap: 26, alignItems: 'center' }}>
        <ConfirmImg />
        <Text style={{ color: '#281C9D', fontWeight: '800', fontSize: 18 }}>
          Transfer successful!
        </Text>
        <View style={{ gap: 6, alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>
            You have successfully transferred{' '}
          </Text>
          <Text style={{ color: '#281C9D', fontWeight: '600', fontSize: 16 }}>
            <Text style={{ color: '#FF4267' }}>$1000</Text> to Amanda
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20, gap: 20 }}>
      {!isConfirm ? (
        <>
          <Text style={{ fontSize: 18, color: '#989898' }}>
            Confirm transaction information
          </Text>
          <FlatList
            data={formData}
            renderItem={formDesign}
            contentContainerStyle={{ gap: 12 }}
          />
        </>
      ) : (
        transferSuccess()
      )}
      <TouchableOpacity
        style={{
          borderRadius: 16,
          padding: 14,
          alignItems: 'center',
          backgroundColor: '#281C9D',
        }}
        onPress={() =>
          isConfirm ? navigation.navigate('DashBoard') : setIsConfirm(true)
        }
      >
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Confirmation;
