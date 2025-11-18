// App.js
import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  // Built-in working placeholder image (always available)
  const profilePic =
    "https://cdn-icons-png.flaticon.com/512/847/847969.png";

  // Animation
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />

      <View style={styles.container}>
        <Animated.View
          style={[
            styles.card,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Image source={{ uri: profilePic }} style={styles.image} />

          <Text style={styles.name}>PRANAV</Text>

          <View style={styles.row}>
            <Text style={styles.label}>USN</Text>
            <Text style={styles.value}>4NI24IS134</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>College</Text>
            <Text style={styles.value}>
              National Institute of Engineering, Mysuru
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Branch</Text>
            <Text style={styles.value}>ISE</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>Professional Profile</Text>
          </View>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: "#111",
    paddingVertical: 35,
    paddingHorizontal: 25,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#333",
    alignItems: "center",
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#222",
    marginBottom: 15,
  },

  name: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 12,
    letterSpacing: 2,
  },

  row: {
    width: "100%",
    marginTop: 10,
  },

  label: {
    color: "#aaa",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },

  value: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 3,
  },

  tag: {
    marginTop: 18,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#555",
  },

  tagText: {
    color: "#ddd",
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 1,
  },
});
