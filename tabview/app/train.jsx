import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Train() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  // Sample data (replace with API integration later)
  const sampleTrains = [
    {
      id: "22691",
      name: "Rajdhani Express",
      depart: "07:00",
      arrive: "10:30",
      duration: "3h 30m",
      fare: "₹480",
    },
    {
      id: "12007",
      name: "Shatabdi Express",
      depart: "08:20",
      arrive: "11:10",
      duration: "2h 50m",
      fare: "₹540",
    },
    {
      id: "20607",
      name: "Vande Bharat",
      depart: "09:00",
      arrive: "11:50",
      duration: "2h 50m",
      fare: "₹610",
    },
  ];

  function searchTrains() {
    if (!from.trim() || !to.trim() || !date.trim()) {
      // simple validation
      return alert("Please enter From, To and Date");
    }
    setLoading(true);
    setResults([]);
    // simulate API call
    setTimeout(() => {
      setResults(sampleTrains);
      setLoading(false);
    }, 1200);
  }

  function clearFields() {
    setFrom("");
    setTo("");
    setDate("");
    setResults([]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerLogo}>🚆 Train Finder</Text>

      <View style={styles.form}>
        <TextInput
          value={from}
          onChangeText={setFrom}
          placeholder="From (Station / City)"
          placeholderTextColor="#8a8a8a"
          style={styles.input}
        />
        <TextInput
          value={to}
          onChangeText={setTo}
          placeholder="To (Station / City)"
          placeholderTextColor="#8a8a8a"
          style={styles.input}
        />
        <TextInput
          value={date}
          onChangeText={setDate}
          placeholder="Date (DD/MM/YYYY)"
          placeholderTextColor="#8a8a8a"
          style={styles.input}
        />

        <View style={styles.controlsRow}>
          <Pressable style={styles.searchBtn} onPress={searchTrains}>
            <Text style={styles.searchText}>Search</Text>
          </Pressable>

          <TouchableOpacity style={styles.clearBtn} onPress={clearFields}>
            <Text style={styles.clearText}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>

      {loading && <ActivityIndicator size="large" color="#fff" style={{ marginTop: 18 }} />}

      {!loading && results.length === 0 && (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Enter details and tap Search to find trains</Text>
        </View>
      )}

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        style={{ width: "100%", marginTop: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.trainTitle}>
                {item.id} — {item.name}
              </Text>
              <Text style={styles.fare}>{item.fare}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.timeLabel}>{item.depart}</Text>
              <Text style={styles.duration}>{item.duration}</Text>
              <Text style={styles.timeLabel}>{item.arrive}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#000" },
  headerLogo: { color: "#fff", fontSize: 24, fontWeight: "700", textAlign: "center" },
  form: { marginTop: 18 },
  input: {
    backgroundColor: "#0e0e0e",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#222",
    marginBottom: 12,
  },
  controlsRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 6 },
  searchBtn: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 10,
  },
  searchText: { color: "#000", fontWeight: "700" },
  clearBtn: {
    borderWidth: 1,
    borderColor: "#444",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  clearText: { color: "#aaa" },
  empty: { marginTop: 20, alignItems: "center" },
  emptyText: { color: "#777" },
  card: {
    backgroundColor: "#0f0f0f",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#222",
  },
  trainTitle: { color: "#fff", fontWeight: "700", fontSize: 16 },
  fare: { color: "#fff", fontWeight: "700" },
  row: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  timeLabel: { color: "#ddd", fontSize: 15, fontWeight: "600" },
  duration: { color: "#888", alignSelf: "center" },
});
