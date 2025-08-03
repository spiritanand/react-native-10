import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FancyCard from './FancyCard';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>

      <ScrollView style={styles.cardContainer} horizontal>
        <View style={styles.card}>
          <Text>Scroll</Text>
        </View>
        <View style={styles.card}>
          <Text>Me</Text>
        </View>
        <View style={styles.card}>
          <Text>Aur</Text>
        </View>
        <View style={styles.card}>
          <Text>Khud</Text>
        </View>
        <View style={styles.card}>
          <Text>Jaan</Text>
        </View>
        <View style={styles.card}>
          <Text>Jao</Text>
        </View>
        <View style={styles.card}>
          <Text>Ting</Text>
        </View>
        <View style={styles.card}>
          <Text>Tong</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 100,
    fontSize: 50,
    color: 'powderblue',
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: 'yellow',
  },
  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    padding: 20,
    backgroundColor: 'pink',
    borderRadius: 10,
    margin: 8,
  },
});
