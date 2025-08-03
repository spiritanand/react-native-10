import { View, Text, StyleSheet } from 'react-native';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards</Text>

      <View style={styles.cardList}>
        <View style={[styles.card, styles.cardRed]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardGreen]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardOrange]}>
          <Text>Orange</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    color: 'powderblue',
    textAlign: 'center',
    marginTop: 100,
  },
  cardList: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    padding: 20,
    margin: 10,
    borderRadius: 8,
    color: 'white',
  },
  cardRed: {
    backgroundColor: 'red',
  },
  cardBlue: {
    backgroundColor: 'blue',
  },
  cardGreen: {
    backgroundColor: 'green',
  },
  cardOrange: {
    backgroundColor: 'orange',
  },
});
