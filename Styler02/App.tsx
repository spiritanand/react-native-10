import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import FlatCards from './component/FlatCards';
import ElevatedCards from './component/ElevatedCards';
import FancyCard from './component/FancyCard';
import TheList from './component/TheList';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatCards />

        <ElevatedCards />

        <FancyCard />

        <TheList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'maroon',
    borderWidth: 5,
  },
});

export default App;
