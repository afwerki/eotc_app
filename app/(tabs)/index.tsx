import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Ethiopian orthodox church </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/praying_monk.jpeg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.card}>
        {/* Your Card Component with dummy text */}
        <Text>This is text  in card.</Text>
      </View>
      <View style={styles.calendar}>
        {/* Your Calendar Component */}
      </View>
      <View style={styles.announcement}>
        {/* Your Announcement Card Component with image and text */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2B48C',
  },
  imageContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  calendar: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  announcement: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default index;
