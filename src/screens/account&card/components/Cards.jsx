import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Cards = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
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
      </ScrollView>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          padding: 16,
          borderRadius: 16,
          backgroundColor: '#281C9D',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>
          Add Card
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cards;
