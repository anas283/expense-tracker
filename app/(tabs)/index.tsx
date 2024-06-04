import { TransactionList } from '@/components/TransactionList';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { BellIcon, ChevronRightIcon, Cog8ToothIcon, WalletIcon } from 'react-native-heroicons/outline';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.topActionBar}>
          <Cog8ToothIcon color="white" />
          <View>
            <Text style={styles.barDateLabel}>
              Today is
            </Text>
            <Text style={styles.barDate}>
              Fri, 21 July
            </Text>
          </View>
          <BellIcon color="white" />
        </View>

        <View style={styles.center}>
          <View>
            <Text style={styles.spendLabel}>
              This month's spend
            </Text>
            <Text style={styles.spendAmount}>
              RM313.31
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={[styles.spendingWallet, styles.shadowProp]}>
          <View style={styles.walletLeft}>
            <WalletIcon color="#33B877" />
            <Text style={styles.walletLeftLabel}>
              Spending Wallet
              </Text>
          </View>
          <View style={styles.walletRight}>
            <TouchableHighlight>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5
                }}
              >
                <Text style={styles.walletRightLabel}>
                  RM5,631.22
                </Text>
                <ChevronRightIcon size="15" color="black" />
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <TransactionList />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    backgroundColor: 'white'
  },
  header: {
    width: '100%',
    height: 350,
    paddingTop: 70,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#33B877',
    position: 'relative'
  },
  topActionBar: {
    position: 'absolute',
    top: 70,
    left: 25,
    right: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  spendingWallet: {
    height: 60,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -100,
    padding: 20,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5
  },
  walletLeft: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  walletLeftLabel: {
    fontWeight: '500'
  },
  walletRight: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-end'
  },
  walletRightLabel: {
    fontWeight: 'bold'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  center: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spendLabel: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '600',
    textAlign: 'center',
    opacity: 0.6
  },
  spendAmount: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  barDateLabel: {
    fontSize: 11,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '600',
    textAlign: 'center',
    opacity: 0.6,
  },
  barDate: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  }
});
