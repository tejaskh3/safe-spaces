import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Fontisto } from "@expo/vector-icons";

export default function Layout() {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <Tabs>
      <Tabs.Screen
        listeners={{
          tabPress: (e) => {
            setCount(1);
          },
        }}
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="tasks" size={24} color="#7CB9E8" />
            ) : (
              <FontAwesome name="tasks" size={24} color="black" />
            ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarLabel: "calendar",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="calendar" size={24} color="#7CB9E8" />
            ) : (
              <AntDesign name="calendar" size={24} color="black" />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "profile",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="account-details"
                size={24}
                color="#7CB9E8"
              />
            ) : (
              <MaterialCommunityIcons
                name="account-details"
                size={24}
                color="black"
              />
            ),
        }}
      />
      <Tabs.Screen
        name="consultants"
        options={{
          tabBarLabel: "consultants",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Fontisto name="doctor" size={24} color="#7CB9E8" />
            ) : (
              <Fontisto name="doctor" size={24} color="black" />
            ),
        }}
      />
    </Tabs>
  );
}
