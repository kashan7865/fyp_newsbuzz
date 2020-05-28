import React from "react";
import { View, Text, Image } from "react-native";

const Category = ({ imageUri, Name, desc }) => {
  return (
    <View
      style={{
        height: 400,
        width: 350,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: "#dddddd"
      }}
    >
      <View style={{ height: 250 }}>
        <Image
          source={imageUri}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "cover"
          }}
        />
      </View>?
      <View style={{ flex: 1, paddingHorizontal: 10, paddingTop: 10 }}>
        {/* <Text style={{ fontSize: 20, fontWeight: "600" }}>{Name}</Text> */}
        <Text
          style={{
            fontSize: 13,
            opacity: 0.5,
            fontWeight: "300",
            textAlign: "justify"
          }}
        >
          {desc}
        </Text>
      </View>
    </View>
  );
};

export default Category;
