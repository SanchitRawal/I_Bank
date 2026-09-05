import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import ElectricityBillIcon from '../../assets/mainIcons/ElectricityBillIcon.svg';
import WaterBillIcon from '../../assets/mainIcons/WaterBillIcon.svg';
import MobilePrepaidBillIcon from '../../assets/mainIcons/MobileBillIcon';
import InternetBillIcon from '../../assets/mainIcons/InternetBillIcon';
import { Shadow } from 'react-native-shadow-2';

const PayBill = () => {
  const sampleBill = [
    {
      label: 'Electric bill',
      desc: 'Pay electric bill this month',
      icon: ElectricityBillIcon,
    },
    {
      label: 'Water bill',
      desc: 'Pay water bill this month',
      icon: WaterBillIcon,
    },
    {
      label: 'Mobile bill',
      desc: 'Pay mobile bill this month',
      icon: MobilePrepaidBillIcon,
    },
    {
      label: 'Internet bill',
      desc: 'Pay internet bill this month',
      icon: InternetBillIcon,
    },
  ];

  const getLayoutForBill = ({ item, index }) => {
    const Icon = item.icon;

    return (
      <Shadow
        key={index}
        distance={5}
        startColor="rgba(0, 0, 0, 0.08)"
        endColor="rgba(0, 0, 0, 0)"
        offset={[0, 3]}
        style={{
          width: '100%',
          borderRadius: 14,
        }}
      >
        <TouchableOpacity
          style={{
            width: '100%',
            height: 88,
            paddingHorizontal: 12,
            paddingVertical: 10,
            borderRadius: 14,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
          }}
        >
          <View style={{ gap: 3 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                color: '#333333',
              }}
            >
              {item.label}
            </Text>

            <Text
              style={{
                color: '#979797',
                fontSize: 12,
              }}
            >
              {item.desc}
            </Text>
          </View>

          <Icon width={70} height={70} />
        </TouchableOpacity>
      </Shadow>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 17,
        paddingTop: 20,
      }}
    >
      <FlatList
        data={sampleBill}
        renderItem={getLayoutForBill}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          gap: 20,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PayBill;
