import { StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const TransactionReport = () => {
  const data = [
    { value: 38, label: 'Jan', frontColor: '#3426C7' },
    { value: 62, label: 'Feb', frontColor: '#3426C7' },
    { value: 88, label: 'Mar', frontColor: '#3426C7' },
    {
      value: 52,
      label: 'Apr',
      frontColor: '#281C9D',
      labelTextStyle: styles.activeMonth,
    },
    { value: 34, label: 'May', frontColor: '#3426C7' },
    { value: 58, label: 'Jun', frontColor: '#3426C7' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#281C9D' }}>
      <View
        style={{
          padding: 60,
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          borderTopRightRadius: 38,
          borderTopLeftRadius: 38,
          padding: 20,
          gap: 14,
        }}
      >
        <View
          style={{
            backgroundColor: '#281C9D',
            borderRadius: 20,
            padding: 20,
            // height: 180,
            justifyContent: 'space-between',
            position: 'relative',
            bottom: 110,
            overflow: 'hidden',
          }}
        >
          <View
            style={{
              position: 'absolute',
              height: 210,
              width: 135,
              borderRadius: 70,
              backgroundColor: '#4BAFF6',
              right: -24,
              top: -16,
            }}
          />
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

        <View style={styles.chartCard}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceAmount}>1000</Text>
            <Text style={styles.currency}>USD</Text>
          </View>

          <BarChart
            data={data}
            height={130}
            width={240}
            barWidth={7}
            spacing={28}
            initialSpacing={8}
            endSpacing={4}
            maxValue={100}
            noOfSections={4}
            roundedTop
            roundedBottom
            barBorderRadius={8}
            isAnimated
            animationDuration={700}
            hideYAxisText
            yAxisThickness={0}
            xAxisThickness={0}
            rulesColor="#F0EFF8"
            rulesThickness={1}
            xAxisLabelTextStyle={styles.monthLabel}
            labelsDistanceFromXaxis={8}
            disableScroll
            backgroundColor="#fff"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartCard: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 8,

    marginTop: -110,
    elevation: 7,
    shadowColor: '#B8B3DC',
    shadowOpacity: 0.22,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 24,
  },
  balanceLabel: {
    color: '#1B1830',
    fontSize: 11,
    fontWeight: '700',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 6,
  },
  balanceAmount: {
    color: '#281C9D',
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
  },
  currency: {
    color: '#5F5A72',
    fontSize: 10,
    marginLeft: 5,
    marginBottom: 5,
    fontWeight: '700',
  },
  monthLabel: {
    color: '#B9B5C9',
    fontSize: 10,
    fontWeight: '700',
  },
  activeMonth: {
    color: '#281C9D',
    fontSize: 10,
    fontWeight: '800',
  },
});

export default TransactionReport;
