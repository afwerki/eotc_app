// App.js
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { ScrollView } from "react-native-gesture-handler";
import quickfood from "../../data/quickfood";
import hotels from "../../data/hotels";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const index = () => {
  const data = quickfood;

  const images = [
    "https://media.istockphoto.com/id/157197704/photo/madonna-of-health.webp?b=1&s=170667a&w=0&k=20&c=-yufTICxryXiEL369vmo7KLA7eOD8gzrWC-KKpr15N0=",
    "https://media.istockphoto.com/id/883679092/photo/prayer-is-the-only-thing-thatll-get-you-through.webp?b=1&s=170667a&w=0&k=20&c=29P8gw2Ic096k8y7_BMcmAy5SjDj27FUx8pCB8PvRRQ=",
    "https://media.istockphoto.com/id/178366724/photo/nativity-scene.webp?b=1&s=170667a&w=0&k=20&c=6s7uSkH-xbzlUO3pb22vg3POERPXlD4OmnYpbhXODwY=",
  ];
  const types = [
    {
      id: "0",
      image:
        "https://media.istockphoto.com/id/157197704/photo/madonna-of-health.webp?b=1&s=170667a&w=0&k=20&c=-yufTICxryXiEL369vmo7KLA7eOD8gzrWC-KKpr15N0=",
      name: "News",
    },
    {
      id: "1",
      image:
        "https://media.istockphoto.com/id/883679092/photo/prayer-is-the-only-thing-thatll-get-you-through.webp?b=1&s=170667a&w=0&k=20&c=29P8gw2Ic096k8y7_BMcmAy5SjDj27FUx8pCB8PvRRQ=",
      name: "Mezmur",
    },
    {
      id: "2",
      image:
        "https://media.istockphoto.com/id/883679092/photo/prayer-is-the-only-thing-thatll-get-you-through.webp?b=1&s=170667a&w=0&k=20&c=29P8gw2Ic096k8y7_BMcmAy5SjDj27FUx8pCB8PvRRQ=",
      name: "Prayer",
    },
    {
      id: "3",
      image:
        "https://media.istockphoto.com/id/178366724/photo/nativity-scene.webp?b=1&s=170667a&w=0&k=20&c=6s7uSkH-xbzlUO3pb22vg3POERPXlD4OmnYpbhXODwY=",
      name: "Work",
    },
    {
      id: "4",
      image:
        "https://media.istockphoto.com/id/178366724/photo/nativity-scene.webp?b=1&s=170667a&w=0&k=20&c=6s7uSkH-xbzlUO3pb22vg3POERPXlD4OmnYpbhXODwY=",
      name: "Charity",
    },
  ];
  return (
    <ScrollView style={{ marginTop: 10 }}>
    {/*search bar */}
   {/**  <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderColor: "#C0C0C0",
        borderRadius: 7,
      }}
    >
      <TextInput
        style={{ fontSize: 17 }}
        placeholder="search for church songs"
      />
      <AntDesign name="search1" size={24} color="#E52B50" />
    </View>
    */}
    {/*image slider */}
    <SliderBox
      images={images}
      atuoPlay
      circleLoop
      dotColor="#13274F"
      inactiveDotColor="#90A4AE"
      ImageComponentStyle={{
        borderRadius: 6,
        width: "94%",
      }}
    />
    {/**food types */}
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <View style={{ margin: 10 }} key={index}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
            <Text style={{ marginTop: 6, textAlign: "center" }}>
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
    {/**quick food */}
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>Get it quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable style={{ margin: 10 }} key={index}>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={{ aspectRatio: 5 / 6, height: 170 }}
              source={{ uri: item.image }}
            >
              <Text
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  fontSize: 27,
                  fontWeight: "900",
                  color: "white",
                }}
              >
                {item.offer} OFF
              </Text>
            </ImageBackground>
            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "500" }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text
                style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}
              >
                {item.rating}
              </Text>
              <Text style={{ marginLeft: 3 }}>.</Text>
              <Text
                style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}
              >
                {item.time}mins
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
    {/**filter button
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Pressable
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          width: 120,
        }}
      >
        <Text style={{ marginTop: 6 }}> Filter</Text>
        <Ionicons name="filter" size={20} color="black" />
      </Pressable>
      <Pressable
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
        }}
      >
        <Text>Sort by price</Text>
      </Pressable>
      <Pressable
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
        }}
      >
        <Text>Sort by rating</Text>
      </Pressable>
    </View>
     */}
    {/*Menu item */}
      
    

  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default index;
