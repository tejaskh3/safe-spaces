import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { consultants } from "./consultant-data";

export default class index extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={consultants}
          renderItem={({ item }) => <ConsultantCard consultant={item} />}
          keyExtractor={(item) => item.name} // Assuming name is unique
        />
      </View>
    );
  }
}

const ConsultantCard = ({ consultant }) => {
  return (
    <View style={styles1.card}>
      <Image source={{ uri: consultant.imageUrl }} style={styles1.image} />
      <View style={styles1.details}>
        <Text style={styles1.name}>{consultant.name}</Text>
        <Text style={styles1.experience}>
          Experience: {consultant.experience}
        </Text>
        <Text style={styles1.specialization}>
          Specialization: {consultant.specialization.join(", ")}
        </Text>
        <Text style={styles1.fees}>Fees: ${consultant.fees} per hour</Text>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  details: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  experience: {
    fontSize: 16,
    color: "#666",
  },
  specialization: {
    fontSize: 16,
    color: "#666",
  },
  fees: {
    fontSize: 16,
    color: "#666",
  },
});
