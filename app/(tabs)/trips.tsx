import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const SwipeableItem = ({ item, onEdit, onDelete }) => {
  const [isSwiped, setIsSwiped] = useState(false);

  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [0, 0.2, 1],
    });

    return (
      <View style={{ flexDirection: 'row', marginVertical: 8 }}>
        <TouchableOpacity
          onPress={() => {
            onEdit(item.id);
            setIsSwiped(false);
          }}
          style={{
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            transform: [{ scale: trans }],
          }}
        >
          <Text style={{ color: 'white' }}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onDelete(item.id);
            setIsSwiped(false);
          }}
          style={{
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            transform: [{ scale: trans }],
          }}
        >
          <Text style={{ color: 'white' }}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable
      renderRightActions={(_, dragX) => renderRightActions(_, dragX)}
      onSwipeableRightOpen={() => setIsSwiped(true)}
      onSwipeableClose={() => setIsSwiped(false)}
    >
      <View style={{ padding: 16, backgroundColor: 'lightgrey' }}>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
      </View>
    </Swipeable>
  );
};

const Page = () => {
  const data = [
    { id: '1', title: 'first item',body:'This is  the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issuis some of the issue bodyhis is some of the issue bodyhis is some of the issu of the issue bodyhis is some of the issue body' },
    { id: '2', title: 'second item', body:'hello' },
    { id: '3', title: 'thired item',body:'hello'  },
    { id: '4', title: 'Item 4',body:'hello'  },
    { id: '5', title: 'Item 5',body:'hello'  },
    { id: '6', title: 'Item 6',body:'hello'  },
    // Add more dummy data as needed
  ];

  const handleEdit = (itemId) => {
    // Implement your edit logic here
    console.log(`Edit item with id ${itemId}`);
  };

  const handleDelete = (itemId) => {
    // Implement your delete logic here
    console.log(`Delete item with id ${itemId}`);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <SwipeableItem item={item} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    />
  );
};

export default Page;
