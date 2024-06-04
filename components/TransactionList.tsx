import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Spotify Subscriptions',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'GoPay Balance Top up',
  },
  {
    id: '72394a0f-3da1-471f-bd96-145571e29d72',
    title: 'UI8 Subscriptions',
  },
  {
    id: '18694a0f-3da1-471f-bd96-145561e29d72',
    title: 'Freepik Subscriptions',
  },
  {
    id: '28694a0f-3da1-471f-bd96-145571e28d72',
    title: 'Shopee',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export function TransactionList() {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede'
  },
  title: {
    fontSize: 14,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});