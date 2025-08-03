import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const LIST = [
  {
    key: 1,
    name: 'Ram',
    description: 'The GOAT',
    image:
      'https://www.tallengestore.com/cdn/shop/products/rama_ocean_a5b0688e-68b3-4254-a126-5e75e1215d9f.jpg?v=1495019470',
  },
  {
    key: 2,
    name: 'Sita',
    description: 'The Goddess',
    image:
      'https://i2.wp.com/myvoice.opindia.com/wp-content/uploads/sites/3/2020/05/sita.jpg?fit=900%2C684&ssl=1',
  },
  {
    key: 3,
    name: 'Krishna',
    description: 'The Balanced',
    image:
      'https://t3.ftcdn.net/jpg/10/99/40/12/360_F_1099401282_5VUNrOSgxUhvd4YL9Ly8qdU0sCHKPXOH.jpg',
  },
  {
    key: 4,
    name: 'Shiva',
    description: 'The destroyer of evil',
    image:
      'https://i.pinimg.com/736x/ce/2a/af/ce2aaf551d0b3f7cecf74dbd33e612c9.jpg',
  },
];

export default function TheList() {
  return (
    <View>
      <Text style={styles.heading}>TheList</Text>

      <ScrollView>
        {LIST.map(item => (
          <View style={styles.item} key={item.key}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
          </View>
        ))}
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
  item: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
  },
  itemTextContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
  },
  itemText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  itemDescription: {
    fontSize: 16,
    color: 'gray',
  },
});
