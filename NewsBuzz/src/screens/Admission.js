import React from "react";
import { View, Text, Dimensions, StatusBar } from "react-native";
import Home from "./components/Explore/Home";
import Category from "./components/Explore/Category";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import TravelGuide from "./components/Guide/TravelGuide";
import { createStackNavigator } from "react-navigation-stack";
import Graduate from "./components/Admission/Graduate";
import { createAppContainer } from "react-navigation";

const { height, width } = Dimensions.get("window");

// const AppContainer = createAppContainer(Navigator);
const Admission = ({ navigation }) => {
  return (
    <>
      {/* <AppContainer /> */}
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 24 }}
      >
        <Text
          style={{ paddingHorizontal: 20, fontSize: 24, fontWeight: "700" }}
        >
          Admissions
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Graduate")}>
          <TravelGuide
            placeUri={{
              uri:
                "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }}
            placeName={"Graduate"}
            // duration={"8 hours"}
            placeDes={
              "Find scholarships to study with our lists of local scholarships – categorized by cities, by subject, and by type of student"
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("UnderGraduate")}>
          <TravelGuide
            placeUri={{
              uri:
                "https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }}
            placeName={"Undergraduate"}
            // duration={"4 hours"}
            placeDes={
              "Find scholarships to study abroad with our lists of international scholarships – categorized by country, by subject, and by type of student"
            }
          />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

// export default createAppContainer(Navigator);
export default Admission;
