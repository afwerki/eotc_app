import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const data = [
    {
      title: 'Hello welcome to the EOTC church APP',
      image: require('../../assets/images/cloud_database.jpeg'),
      description: 'Description 1',
    },
    {
      title: 'Card 2',
      image: require('../../assets/images/cloud_database.jpeg'),
      description: 'Description 2',
    },
    {
      title: 'Card 2',
      image: require('../../assets/images/cloud_database.jpeg'),
      description: 'Description 2',
    },
    // Add more cards as needed
  ];

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.floor(contentOffset.x / Dimensions.get('window').width);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({ animated: true, x: nextIndex * Dimensions.get('window').width });
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Text>A church app serves as a dynamic and essential tool that extends the reach and impact of a religious community in the digital age. It plays a crucial role in fostering a sense of connection and unity among the congregation. Through features like event calendars, sermon archives, and notifications, the app keeps members informed about upcoming activities, sermons, and community events. Additionally, it provides a platform for convenient and secure online giving, enhancing financial transparency and supporting the church's mission.

The church app serves as a virtual hub for spiritual growth, offering access to a library of religious resources, daily devotionals, and interactive study materials. It bridges the gap between physical gatherings, enabling members to stay engaged with their faith throughout the week. Prayer request features facilitate a sense of community by allowing members to support one another in times of need.

In an era where technology is prevalent, a church app becomes a modern tool for outreach and evangelism, reaching individuals beyond the physical walls of the church. It facilitates easy communication, encouraging dialogue among members and leaders. Overall, a well-designed church app is more than a technological asset; it becomes a catalyst for fostering spiritual growth, community engagement, and the shared mission of the church in a rapidly evolving digital landscape.
</Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, { opacity: index === currentIndex ? 1 : 0.3 }]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:100,
  },
  image: {
    width: '90%',
    height: 200, // Set your desired height
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    marginHorizontal: 5,
  },
});

export default Page;



