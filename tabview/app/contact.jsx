import React from "react";
import { View, Text, StyleSheet, Linking, Pressable } from "react-native";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Developer</Text>
        <Text style={styles.value}>Pranav</Text>

        <Text style={[styles.label, { marginTop: 12 }]}>Email</Text>
        <Pressable onPress={() => Linking.openURL("mailto:pranav@example.com")}>
          <Text style={styles.link}>pranav@example.com</Text>
        </Pressable>

        <Text style={[styles.label, { marginTop: 12 }]}>College</Text>
        <Text style={styles.value}>National Institute of Engineering, Mysuru</Text>
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
  label: { color: "#999", fontSize: 13 },
  value: { color: "#fff", fontSize: 16, fontWeight: "600", marginTop: 4 },
  link: { color: "#0b5cff", marginTop: 6 },
});
