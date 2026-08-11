import { useMemo, useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';

const Confirmation = () => {
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

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20, gap: 20 }}>
      <Text style={{ fontSize: 18, color: '#989898' }}>
        Confirm transaction information
      </Text>
      <FlatList
        data={formData}
        renderItem={formDesign}
        contentContainerStyle={{ gap: 12 }}
      />
    </View>
  );
};

export default Confirmation;
