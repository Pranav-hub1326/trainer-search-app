// App.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Image
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [screen, setScreen] = useState("signup"); // signup → signin → loading → train
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // --------------- SCREEN 1 : SIGN UP ---------------
  if (screen === "signup") {
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar style="light" />

        <View style={styles.container}>
          <Text style={styles.title}>Create Account</Text>

          <TextInput
            placeholder="Choose Username"
            placeholderTextColor="#999"
            style={styles.input}
          />

          <TextInput
            placeholder="Choose Password"
            placeholderTextColor="#999"
            style={styles.input}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => setScreen("signin")}
          >
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setScreen("signin")}>
            <Text style={styles.link}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // --------------- SCREEN 2 : SIGN IN ---------------
  if (screen === "signin") {
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar style="light" />

        <View style={styles.container}>
          <Text style={styles.title}>Welcome Back</Text>

          <TextInput
            placeholder="Username"
            placeholderTextColor="#999"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => setScreen("loading")}
          >
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setScreen("signup")}>
            <Text style={styles.link}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // --------------- SCREEN 3 : TRAIN LOADING ---------------
  if (screen === "loading") {
    useEffect(() => {
      setTimeout(() => setScreen("train"), 2000); // 2 seconds delay
    }, []);

    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar style="light" />
        <View style={styles.center}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/71/71028.png",
            }}
            style={{ width: 90, height: 90, marginBottom: 20 }}
          />
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.loadingText}>Fetching Train Details...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // --------------- SCREEN 4 : TRAIN DETAILS PAGE ---------------
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />

      <View style={styles.trainCard}>
        <Text style={styles.trainTitle}>Train Availability</Text>

        <View style={styles.row}>
          <Text style={styles.label}>From</Text>
          <Text style={styles.value}>Mysuru Junction (MYS)</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>To</Text>
          <Text style={styles.value}>KSR Bengaluru (SBC)</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Departure</Text>
          <Text style={styles.value}>06:15 AM</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Arrival</Text>
          <Text style={styles.value}>09:00 AM</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Fare</Text>
          <Text style={styles.value}>₹85</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>19 Nov 2025</Text>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setScreen("signin")}
        >
          <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// --------------------- STYLES ---------------------
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 25,
  },
  input: {
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#333",
    color: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 14,
  },
  btn: {
    backgroundColor: "#333",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  link: {
    color: "#888",
    marginTop: 15,
    textAlign: "center",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  loadingText: {
    color: "#ccc",
    marginTop: 10,
  },
  trainCard: {
    marginTop: 60,
    backgroundColor: "#111",
    padding: 25,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#333",
    width: "88%",
    alignSelf: "center",
  },
  trainTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    marginBottom: 12,
  },
  label: {
    color: "#888",
    fontSize: 13,
    textTransform: "uppercase",
  },
  value: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
