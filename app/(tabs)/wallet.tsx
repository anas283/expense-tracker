import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function AddExpenseScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">Wallet</ThemedText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    padding: 20,
  }
});
