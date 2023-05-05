import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import homeScreen from './screens/homescreen';
import contactScreen from './screens/contactscreen';
import testScreen from './screens/testscreen';

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="test"
          screenOptions={({ route }) => ({
            tabBarStyle: { height: 70 },
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "home") {
                return (
                  <Ionicons name={focused
                    ? "home-sharp" : "home-sharp"}
                    size={size}
                    color={focused ? "#8cbbf1" : "#838991"}
                  />
                );
              }
              else if (route.name === "contact") {
                return (
                  <Ionicons name={focused
                    ? "information-circle" : "information-circle"}
                    size={size}
                    color={focused ? "#8cbbf1" : "#838991"}
                  />
                );
              }
              else if (route.name === "test") {
                return (
                  <FontAwesome name={focused
                    ? "play" : "play"}
                    size={size}
                    color={focused ? "#8cbbf1" : "#838991"}
                  />
                );
              }
            }
          }
          )}>
          <Tab.Screen name="home" component={homeScreen} options={{ headerShown: false }} />
          <Tab.Screen name="test" component={testScreen} options={{ headerShown: false }} />
          <Tab.Screen name="contact" component={contactScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

}
