import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

function App() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <SafeAreaView>
      <ScrollView>
        <Text
          style={{
            ...styles.text,
            ...(isDarkMode ? styles.dark : styles.light),
          }}
        >
          Namaste Duniyaa
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    margin: 10,
  },
  dark: {
    color: 'orange',
    backgroundColor: 'black',
  },
  light: {
    color: 'black',
    backgroundColor: 'white',
  },
});

export default App;
