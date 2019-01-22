import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import HomeTab from './BottomTabNavigator/HomeTab';
import LikesTab from './BottomTabNavigator/LikesTab';
import SearchTab from './BottomTabNavigator/SearchTab';
import AddMediaTab from './BottomTabNavigator/AddMediaTab';
import ProfileTab from './BottomTabNavigator/ProfileTab';

import { Icon } from 'native-base';

class MainScreen extends Component {

    static navigationOptions = {
        header: null
    }
  render() {
    return (
      <AppTabNavigator />
    );
  }
}
export default MainScreen;

const BottomTabNavigator = createMaterialTopTabNavigator(
  {
    HomeTab: {
      screen: HomeTab
    },
    SearchTab: {
      screen: SearchTab
    },
    AddMediaTab: {
      screen: AddMediaTab
    },
    LikesTab: {
      screen: LikesTab
    },
    ProfileTab: {
      screen: ProfileTab
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: "white"
          }
        })
      },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showIcon: true,
      showLabel: false
    }
  }
);

const AppTabNavigator = createAppContainer(BottomTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
