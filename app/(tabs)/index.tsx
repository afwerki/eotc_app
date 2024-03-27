import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { MaterialIcons } from "@expo/vector-icons";
import quickfood from "../../data/quickfood";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  [
    {
      icon: "🏨",
      name: "ስራ",
    },
    {
      icon: "🚙",
      name: "ሹፍርና",
    },
    {
      icon: "🏠",
      name: "ቤት ክራይ",
    },
  ],
  [
    {
      icon: "💵",
      name: "ብር መላኪያ",
    },
    {
      icon: "🏦",
      name: "Finance",
    },
    {
      icon: "💳",
      name: "Wallet",
    },
  ],
];

const index = () => {
  const data = quickfood;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topContent}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.banner}>
              <Text>🤑</Text>
              <Text style={styles.bannerText}>እንኮን ውደቤተክርስቲያን በሰላም መጡ</Text>
              <FeatherIcon name="arrow-right" size={20} color="#fff" />
            </View>
          </TouchableOpacity>
          <View style={styles.categories}>
            {categories.map((row, index) => (
              <View style={styles.categoriesRow} key={index}>
                {row.map((item) => (
                  <TouchableOpacity
                    style={styles.category}
                    key={item.name}
                    onPress={() => {
                      // handle onPress
                      navigation.navigate(item.link);
                    }}
                  >
                    <View style={styles.categoryIcon}>
                      <Text style={{ fontSize: 36 }}>{item.icon}</Text>
                    </View>
                    <Text style={styles.categoryText}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </View>
        <View style={{ marginTop: 10, backgroundColor: "#f3e4f1" }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>ማስታወቂያ</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((item, index) => (
              <Pressable style={{ margin: 10 }} key={index}>
                <ImageBackground
                  imageStyle={{ borderRadius: 6 }}
                  style={{ aspectRatio: 5 / 6, height: 170 }}
                  source={{ uri: item.image }}
                ></ImageBackground>
                <Text
                  style={{ marginTop: 10, fontSize: 16, fontWeight: "500" }}
                >
                  {item.name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        ></View>

        <View style={styles.NewsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>📰 News</Text>

            <View style={styles.verticalLine} />
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2h1cmNofGVufDB8fDB8fHww",
                }}
              />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                eget urna vel est vehicula pretium. Maecenas non nisi nec sapien
                tincidunt consequat.
              </Text>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2h1cmNofGVufDB8fDB8fHww",
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                eget urna vel est vehicula pretium. Maecenas non nisi nec sapien
                tincidunt consequat.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3e4f1",
    flex: 1,
  },
  /** Top */
  top: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  topContent: {
    paddingHorizontal: 24,
  },
  /** Header */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 9999,
  },
  /** Banner */
  banner: {
    marginTop: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#07a9e3",
    padding: 16,
    borderRadius: 16,
  },
  bannerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginLeft: 8,
    marginRight: "auto",
  },
  /** Categories */
  categories: {
    marginTop: 12,
  },
  categoriesRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    marginHorizontal: -4,
  },
  /** Category */
  category: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 4,
  },
  categoryIcon: {
    width: "100%",
    borderRadius: 16,
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 36,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#505050",
    marginTop: 8,
    textAlign: "center",
  },
  /** Content */
  content: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingBottom: 24,
    marginTop: 8,
    height: 420,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#505050",
  },
  contentLink: {
    fontSize: 16,
    fontWeight: "600",
    color: "#505050",
  },
  contentPlaceholder: {
    borderStyle: "dashed",
    borderWidth: 4,
    borderColor: "#e5e7eb",
    flex: 1,
    borderRadius: 8,
  },

  NewsContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  verticalLine: {
    width: 1,
    backgroundColor: "black",
  },
  bodyContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
});
