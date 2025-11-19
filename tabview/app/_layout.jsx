import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#fff", borderTopColor: "#ddd" },
        tabBarActiveTintColor: "#0b5cff",
        tabBarInactiveTintColor: "#666",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size ?? 20} />
          ),
        }}
      />
      <Tabs.Screen
        name="train"
        options={{
          title: "Train",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="train" color={color} size={size ?? 20} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" color={color} size={size ?? 20} />
          ),
        }}
      />
      <Tabs.Screen
        name="project"
        options={{
          title: "Project",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase" color={color} size={size ?? 20} />
          ),
        }}
      />
    </Tabs>
  );
}
