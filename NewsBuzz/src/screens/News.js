import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Image
} from "react-native";
import {
  Entypo as En,
  FontAwesome as F,
  AntDesign as AD
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import TravelGuide from "./components/Guide/TravelGuide";
const News = () => {
  return (
    <ScrollView
      vertical
      showsVerticalScrollIndicator={false}
      style={{
        marginTop: StatusBar.currentHeight
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={{
            uri:
              "https://images.unsplash.com/photo-1564055630017-d58393798b8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1482&q=80"
          }}
        />
        <Text style={styles.textContainer}>Latest</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={{
            uri:
              "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          }}
        />
        <Text style={styles.textContainer}>Sports</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={{
            uri:
              "https://images.unsplash.com/photo-1515537983722-312ce6b52b04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
          }}
        />
        <Text style={styles.textContainer}>Business</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={{
            uri:
              "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=1500&q=80"
          }}
        />
        <Text style={styles.textContainer}>Technology</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={{
            uri:
              "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          }}
        />
        <Text style={styles.textContainer}>World News</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 450,
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: "#dddddd"
  },
  newsContainer: {
    flexDirection: "row",
    marginHorizontal: 50
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  textContainer: {
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "700",
    color: "white",
    // backgroundColor: "white",
    position: "absolute",
    top: 150,
    left: 180,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default News;
