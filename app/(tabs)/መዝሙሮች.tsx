import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { Link } from "expo-router";

const Page = () => {
  const items = [
    {
      img: "https://plus.unsplash.com/premium_photo-1677439907866-938da05a0ee0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "ሀኪም ሰብለ በእርግዝና ዙሪያ ለሴቶች ትምህርት መስጠት ትፈልጋለች።",
      author: "አፍወርቅ",
      authorImg:
        "https://media.istockphoto.com/id/157189484/photo/icon-madonna-with-child.webp?b=1&s=170667a&w=0&k=20&c=u90v28mLh8n2gW26vBHlpoMbRdxn8kk_TSTKToYslME=",
      tag: "ጤና",
      date: "Mar, 2023",
    },
    {
      img: "https://media.istockphoto.com/id/157189484/photo/icon-madonna-with-child.webp?b=1&s=170667a&w=0&k=20&c=u90v28mLh8n2gW26vBHlpoMbRdxn8kk_TSTKToYslME=",
      title: "ሀኪም ሰብለ በእርግዝና ዙሪያ ለሴቶች ትምህርት መስጠት ትፈልጋለች።",
      author: "አፍወርቅ",
      authorImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      tag: "ጤና",
      date: "Mar, 2023",
    },
    {
      img: "https://images.stockcake.com/public/8/0/4/80416c71-4453-44f2-a986-4bf148efd0fd_large/serene-church-interior-stockcake.jpg",
      title: "ሀኪም ሰብለ በእርግዝና ዙሪያ ለሴቶች ትምህርት መስጠት ትፈልጋለች።",
      author: "አፍወርቅ",
      authorImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      tag: "ጤና",
      date: "Mar, 2023",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661281316103-9aef5ad47c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      title: "ሀኪም ሰብለ በእርግዝና ዙሪያ ለሴቶች ትምህርት መስጠት ትፈልጋለች።",
      author: "አፍወርቅ",
      authorImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      tag: "ጤና",
      date: "Mar, 2023",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661281316103-9aef5ad47c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      title: "ሀኪም ሰብለ በእርግዝና ዙሪያ ለሴቶች ትምህርት መስጠት ትፈልጋለች።",
      author: "አፍወርቅ",
      authorImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      tag: "ጤና",
      date: "Mar, 2023",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661281316103-9aef5ad47c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      title: "ሀኪም ሰብለ በእርግዝና ዙሪያ ለሴቶች ትምህርት መስጠት ትፈልጋለች።",
      author: "አፍወርቅ",
      authorImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      tag: "ጤና",
      date: "Mar, 2023",
    },

    {
      img: "https://plus.unsplash.com/premium_photo-1661281316103-9aef5ad47c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      title: "ሀኪም ሰብለ በእርግዝና ዙሪያ ለሴቶች ትምህርት መስጠት ትፈልጋለች።",
      author: "አፍወርቅ",
      authorImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      tag: "ጤና",
      date: "Mar, 2023",
    },

    {
      img: "https://plus.unsplash.com/premium_photo-1661281316103-9aef5ad47c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      title: "ሀኪም ሰብለ በእርግዝና ዙሪያ ለሴቶች ትምህርት መስጠት ትፈልጋለች።",
      author: "አፍወርቅ",
      authorImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      tag: "ጤና",
      date: "Mar, 2023",
    },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>መዝሙሮች</Text>
        {items.map(({ img, title, author, authorImg, tag, date }, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                //handle on press
              }}
            >
              <View style={styles.card}>
                <Image
                  alt=""
                  resizeMode="cover"
                  source={{ uri: img }}
                  style={styles.cardImg}
                />
                <View style={styles.cardBoday}>
                  <Text style={styles.cardTag}>{tag}</Text>
                  <Text style={styles.cardTitle}>{title}</Text>

                  <View style={styles.cardRow}>
                    <View style={styles.cardRowItem}>
                      <Image
                        alt=""
                        source={{ uri: authorImg }}
                        style={styles.cardRowItemImage}
                      />
                      <Text style={styles.cardRowItemText}>{author}</Text>
                    </View>
                    <Text style={styles.cardRowDivider}>.</Text>
                    <View style={styles.cardRowItem}>
                      <Text style={styles.cardRowItemText}>{date}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
/**
 https://withfra.me/components/list-card-sections
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3e4f1',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "stretch",
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  cardImg: {
    width: 96,
    height: 96,
    borderRadius: 12,
  },
  cardBoday: {
    flex: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
  },
  cardTag: {
    fontWeight: "500",
    fontSize: 12,
    color: "#939393",
    marginBottom: 7,
    textTransform: "capitalize",
  },
  cardTitle: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    color: "#000",
    marginBottom: 8,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: -8,
    marginBottom: "auto",
  },
  cardRowItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
    borderRightWidth: 1,
    borderColor: "transparent",
  },
  cardRowItemImage: {
    width: 22,
    height: 22,
    borderRadius: 9999,
    marginRight: 6,
  },
  cardRowItemText: {
    fontWeight: "400",
    fontSize: 13,
    color: "#939393",
  },
  cardRowDivider: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#939393",
  },
});
export default Page;
