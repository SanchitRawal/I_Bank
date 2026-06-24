import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import ExChange from '../../assets/mainIcons/exchange';
import ExChangeRate from '../../assets/mainIcons/exchangeRate';
import InterestRate from '../../assets/mainIcons/interestRate';
import Branch from '../../assets/mainIcons/branch'

const Search = () => {
  const searchOptions = [
    {
      label: 'Branch',
      sublabel: 'Search for branch',
      icon: <Branch/>,
    },
    {
      label: 'Interest Rate',
      sublabel: 'Search for interest rate',
      icon: <InterestRate/>,
    },
    {
      label: 'Exchange Rate',
      sublabel: 'Search for exchange rate',
      icon: <ExChangeRate/>,
    },
    {
      label: 'Exchange',
      sublabel: 'Exchange amount of amount',
      icon: <ExChange/>,
    },
  ];

  const onCardPress = () => {};
  return (
    <View style={{ flex: 1, backgroundColor: '#F2F2F2', alignItems: 'center' }}>
      <FlatList
        data={searchOptions}
        contentContainerStyle={{ gap: 20, padding: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={onCardPress}
            style={{
              borderWidth: 1,
              padding: 16,
              minWidth: '94%',
              borderRadius: 16,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <View style={{ gap: 6}}>
              <Text style={{fontWeight: '700', fontSize: 18, letterSpacing: 0.2}}>{item.label}</Text>
              <Text style={{color: '#979797', fontSize: 14, fontWeight: '400', letterSpacing: 0.2}}>{item.sublabel}</Text>
            </View>
            {item.icon}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Search;
