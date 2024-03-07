import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const page = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);

  const handleUpload = () => {
    if (!title || !body || !image) {
      Alert.alert('Missing Information', 'Please fill in all fields and upload an image.');
      return;
    }
    // Handle upload logic here
    console.log('Title:', title);
    console.log('Body:', body);
    console.log('Image:', image);
    // Send data to backend API
    // Reset form
    setTitle('');
    setBody('');
    setImage(null);
    Alert.alert('News Uploaded', 'Your news has been successfully uploaded!');
  };

  const handleImageUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permission Required', 'Permission to access camera roll is required to upload an image.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        style={[styles.input, styles.bodyInput]}
        multiline={true}
      />
      <Button title="Upload Image" onPress={handleImageUpload} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Upload News" onPress={handleUpload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 18,
  },
  bodyInput: {
    height: 100,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default page;
