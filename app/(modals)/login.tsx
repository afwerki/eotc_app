import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
const Page = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.showModalButton} onPress={toggleModal}>
      <Text>Show Modal</Text>
    </TouchableOpacity>

    <Modal
      isVisible={isModalVisible}
      onSwipeComplete={toggleModal}
      swipeDirection={['down']}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <Text>Modal Contodal Contodal Contodal Contodal Contodal Contodal Contodal Contodal Contodal Contodal Contodal Contodal Contodal Contodal Contodal Contodal Contodal Contodal Contodal Content</Text>
      </View>
    </Modal>
  </View>
  )
}

const styles=StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  showModalButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
})
export default Page