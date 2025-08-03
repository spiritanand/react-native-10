import {
  Image,
  Linking,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text
        style={styles.heading}
        onPress={() => Linking.openURL('https://www.google.com')}
      >
        Fancy Places
      </Text>

      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1750354285818-cf847dc6af00?q=80&w=2380&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />

        <View style={styles.cardBody}>
          <Text style={[styles.cardText, styles.cardHeader]}>Adv</Text>
          <Text style={[styles.cardText, styles.cardDesc]}>
            The place to be where no one comes
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.google.com')}
        >
          <Text>Click me</Text>
        </TouchableOpacity>

        <Pressable
          onPress={() => Linking.openURL('https://www.google.com')}
          onLongPress={() => Linking.openURL('https://www.yahoo.com')}
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#E7D3D3' : '#D25D5D' },
          ]}
        >
          <Text>Click me</Text>
        </Pressable>
      </View>
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
  card: {
    backgroundColor: '#1A2A80',
    marginHorizontal: 50,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    height: 200,
  },
  cardBody: {
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  cardText: {
    color: '#FFFFF0',
  },
  cardHeader: {
    fontSize: 24,
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 80,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
