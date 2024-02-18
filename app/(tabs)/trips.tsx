import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const Page = () => {
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setemail] = useState('');
  const [age, setage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await fetch('https://9cba-92-236-121-121.ngrok-free.app/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({first_name,last_name,email,age, username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert('Registration Successful', 'You can now login.');
      } else {
        Alert.alert('Registration Failed', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred while registering.');
    }
  };


  return (
    <View>
      <TextInput
        placeholder="Frist name"
        value={first_name}
        onChangeText={setfirst_name}
      />
      <TextInput
        placeholder="last name"
        value={last_name}
        onChangeText={setlast_name}
      />
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={setemail}
      />
      <TextInput
        placeholder="age"
        value={age}
        onChangeText={setage}
      />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default Page;
