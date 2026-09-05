import Ionicons from '@react-native-vector-icons/ionicons/static';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const MobilePrepaid = () => {
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

  const sampleAmt = ['$10', '$20', '$30'];
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ gap: 20 }}>
        <TouchableOpacity
          style={{ borderWidth: 1, borderRadius: 14, padding: 12 }}
        >
          <Text></Text>
        </TouchableOpacity>
        <View style={{ gap: 20 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
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
        <View style={{ gap: 20 }}>
          <Text style={{ color: '#979797', fontWeight: '500', fontSize: 16 }}>
            Phone Number
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 16,
              borderColor: '#CBCBCB',
              backgroundColor: '#fff',
            }}
          />
        </View>
        <View style={{ gap: 20 }}>
          <Text style={{ color: '#979797', fontWeight: '500', fontSize: 16 }}>
            Chooose amount
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20 }}>
            {sampleAmt.map((elem, index) => (
              // <Shadow
              //   key={index}
              //   distance={4}
              //   startColor="rgba(0, 0, 0, 0.12)"
              //   endColor="rgba(0, 0, 0, 0)"
              //   offset={[0, 2]}
              //   style={{
              //     borderRadius: 20,
              //   }}
              // >
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderRadius: 20,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 14,
                  borderColor: '#CBCBCB',
                }}
              >
                <Text>{elem}</Text>
              </TouchableOpacity>
              // </Shadow>
            ))}
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          padding: 16,
          alignItems: 'center',
          borderRadius: 26,
          backgroundColor: '#281C9D',
        }}
      >
        <Text style={{ fontWeight: '700', color: '#fff', fontSize: 16 }}>
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
    
  );
};

export default MobilePrepaid;
