import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.logo}>🚆 Trainer Search</Text>
      </View>

      <Text style={styles.subtitle}>
        Find trains, timings and fares between cities — fast and clean.
      </Text>

      <Link href="/train" style={styles.link}>
        <View style={styles.primaryBtn}>
          <Text style={styles.btnText}>Search Trains</Text>
        </View>
      </Link>

      <View style={styles.footer}>
        <Text style={styles.small}>Made for demo · Clean black & white UI</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20, alignItems: "center" },
  header: { marginTop: 36, alignItems: "center" },
  title: { color: "#9aa0a6", fontSize: 16 },
  logo: { color: "#fff", fontSize: 28, fontWeight: "700", marginTop: 6 },
  subtitle: { color: "#bbb", textAlign: "center", marginTop: 18, maxWidth: 560 },
  link: { marginTop: 28 },
  primaryBtn: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 12,
  },
  btnText: { color: "#000", fontWeight: "700", fontSize: 16 },
  footer: { position: "absolute", bottom: 24, alignItems: "center" },
  small: { color: "#666", fontSize: 12 },
});
