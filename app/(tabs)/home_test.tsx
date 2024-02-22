// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList,SafeAreaView, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const Page = () => {

  return (
    <SafeAreaView>
      <View style={{ flexDirection:'row', alignContent:'center', justifyContent:'space-between',borderWidth:1, margin:10, padding:10, borderColor:'#C0C0C0'}}>
        <TextInput placeholder='search for resturant items on more'/>
        <AntDesign name="search1" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Page;



