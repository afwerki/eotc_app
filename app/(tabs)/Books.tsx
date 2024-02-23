// App.js

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const Page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://15ba-92-236-121-121.ngrok-free.app/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User List</Text>
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text>{`Name: ${item.first_name} ${item.last_name}`}</Text>
            <Text>{`Email: ${item.email}`}</Text>
            <Text>{`Age: ${item.age}`}</Text>
            <Text>{`Username: ${item.username}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  userContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default Page;



