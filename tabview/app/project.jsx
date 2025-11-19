import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Project() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>Trainer Search App</Text>
        <Text style={styles.description}>
          This demo app shows a professional Train Search UI built with Expo Router.
          Use the Train tab to search sample trains; later you can plug a real API.
        </Text>

        <Text style={[styles.heading, { marginTop: 12 }]}>Tech</Text>
        <Text style={styles.description}>Expo · React Native · Expo Router</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { color: "#fff", fontSize: 22, fontWeight: "700" },
  card: {
    marginTop: 18,
    backgroundColor: "#0f0f0f",
    padding: 16,
    borderRadius: 12,
    borderColor: "#222",
    borderWidth: 1,
  },
  heading: { color: "#fff", fontWeight: "700", fontSize: 16 },
  description: { color: "#bbb", marginTop: 6, lineHeight: 20 },
});
