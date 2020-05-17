import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import TravelGuide from "./components/Guide/TravelGuide";

const Scholarship = ({ navigation }) => {
  return (
    <ScrollView
      vertical
      showsVerticalScrollIndicator={false}
      style={{ marginTop: 24 }}
    >
      <Text style={{ paddingHorizontal: 20, fontSize: 24, fontWeight: "700" }}>
        Scholarships
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Local")}>
        <TravelGuide
          placeUri={{
            uri:
              "https://www.boell.de/sites/default/files/uploads/2018/02/pakistan-flag.jpg"
          }}
          placeName={"Local Scholarship"}
          // duration={"8 hours"}
          placeDes={
            "Find scholarships to study with our lists of local scholarships – categorized by cities, by subject, and by type of student"
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("International")}>
        <TravelGuide
          placeUri={{
            uri:
              "https://images.unsplash.com/photo-1562917947-859259de851c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1477&q=80"
          }}
          placeName={"International Scholarship"}
          // duration={"4 hours"}
          placeDes={
            "Find scholarships to study abroad with our lists of international scholarships – categorized by country, by subject, and by type of student"
          }
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Scholarship;
