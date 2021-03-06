import React from "react";
import { StyleSheet, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  Ionicons as Icons,
  FontAwesome as FIcons,
  AntDesign as AD,
  Feather as FeatherIcon,
  Entypo
} from "@expo/vector-icons";

import HomePage from "./src/screens/HomePage";
import Admission from "./src/screens/Admission";
import Scholarship from "./src/screens/Scholarship";
import Event from "./src/screens/Event";
import Jobs from "./src/screens/Jobs";

import MainPage from "./src/screens/components/NewsCategory/MainPage";
import { createStackNavigator } from "react-navigation-stack";
// import { TransitionPresets } from "@react-navigation/stack";
import Graduate from "./src/screens/components/Admission/Graduate";
import Undergraduate from "./src/screens/components/Admission/Undergraduate";
import Local from "./src/screens/components/Scholarship/Local";
import International from "./src/screens/components/Scholarship/International";

console.disableYellowBox = true;
const Tabs = createBottomTabNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        tabBarLabel: "HomePage",
        tabBarIcon: ({ tintColor }) => (
          <AD name="home" color={tintColor} size={24} />
        )
      }
    },
    News: {
      screen: MainPage,
      navigationOptions: {
        tabBarLabel: "NEWS",
        tabBarIcon: ({ tintColor }) => (
          <FIcons name="newspaper-o" color={tintColor} size={24} />
        )
      }
    },
    Admission: {
      screen: createStackNavigator({
        Admission: {
          screen: Admission,
          navigationOptions: () => ({
            header: null
          })
        },
        Graduate: {
          screen: Graduate,
          navigationOptions: () => ({
            title: "Graduate"
          })
        },
        UnderGraduate: {
          screen: Undergraduate,
          navigationOptions: () => ({ title: "UnderGraduate" })
        }
      }),
      navigationOptions: {
        tabBarLabel: "ADMISSIONS",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/seller.png")}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        )
      }
    },
    Scholarship: {
      screen: createStackNavigator({
        Scholarship: {
          screen: Scholarship,
          navigationOptions: () => ({
            header: null
          })
        },
        Local: {
          screen: Local,
          navigationOptions: () => ({
            title: "Local"
          })
        },
        International: {
          screen: International,
          navigationOptions: () => ({ title: "International" })
        }
      }),
      navigationOptions: {
        tabBarLabel: "SCHOLARSHIPS",
        tabBarIcon: ({ tintColor }) => (
          <FIcons name="graduation-cap" color={tintColor} size={24} />
        )
      }
    },
    Jobs: {
      screen: Jobs,
      navigationOptions: {
        tabBarLabel: "JOBS",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/work.png")}
            style={{ height: 28, width: 28, tintColor: tintColor }}
          />
        )
      }
    },
    Event: {
      screen: Event,
      navigationOptions: {
        tabBarLabel: "EVENTS",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/event.png")}
            style={{ height: 28, width: 28, tintColor: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey",
      showLabel: true,
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 10
      }
    }
  }
);

export default createAppContainer(Tabs);
