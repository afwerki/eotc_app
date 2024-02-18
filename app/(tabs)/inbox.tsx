import { View, Text, ImageBackground, FlatList, StyleSheet,ScrollView } from 'react-native'
import React from 'react'

import { Link } from 'expo-router'

const Page = () => {
  const  data=[
    {id:1, title:"Prayers", description: "In Selassie church", updatedDate:"2024-02-14", image:require('../../assets/images/praying_monk.jpeg'), },
    {
      id:2,
      title:"Bible study",
      description: "Description for card 2",
      updatedDate:"2024-02-14",
      image:require('../../assets/images/cross_in_room.jpeg'),
    },
    {
      id:3,
      title:"The nearset church",
      description: "Description for card 1",
      updatedDate:"2024-02-14",
      image:require('../../assets/images/inside_church.jpeg'),
    },
    {
      id:4,
      title:"Mezmurs",
      description: "Description for card 2",
      updatedDate:"2024-02-14",
      image:require('../../assets/images/catedral_outside.jpeg'),
    },
    {
      id:5,
      title:"Mezmurs",
      description: "Description for card 2",
      updatedDate:"2024-02-14",
      image:require('../../assets/images/catedral_outside.jpeg'),
    },
    {
      id:6,
      title:"Mezmurs",
      description: "Description for card 2",
      updatedDate:"2024-02-14",
      image:require('../../assets/images/catedral_outside.jpeg'),
    },
    
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <ImageBackground source={item.image} style={styles.image}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.updateDate}>Last Updated: {item.updateDate}</Text>
      </ImageBackground>
    </View>
  );

  return (
    <ImageBackground source={require('../../assets/images/paper.jpeg')} style={styles.background}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        vertical
      />
       <View>
      <Link href={"/(modals)/login"}> Login</Link>
      <Link href={"/(modals)/flier"}> flier</Link>
      <Link href={"/(modals)/booking"}> Booking</Link>
      <Link href={"/listing/1337"}> Listing details</Link>
    </View>
      </ImageBackground>
  )
}

const styles=StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  card: {
    margin: 30,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  image: {
    height: 200,
    justifyContent: 'flex-end',
  },
  description: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    fontSize: 20,
    color:  'red'
  },
  updateDate: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    fontSize: 12,
    color: '#666',
  },

})
export default Page