import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { Redirect } from "expo-router";

const index = () => {
  const router = useRouter();
  const handleLoginButtonClick = () => {
    // will take this to login
    console.log("button pressed");
    router.replace("/quiz");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://imgs.search.brave.com/JXBHKM1UPgFSPobGhlqGAuX2VZHTRLBnHsQXv35lvEg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oYW5kcy1ob2xk/aW5nLWJyYWluLXdp/dGgtcHV6emxlLXBh/cGVyLWN1dG91dC13/b3JsZC1tZW50YWwt/aGVhbHRoLWRheV80/OTE0OS0xNDcyLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
          height: 300,
          width: 200,
        }} // Replace with your background image
        style={styles.background}
      >
        <View style={styles.content}>
          <Text style={styles.appName}>SafeSpaces</Text>
          <Text style={styles.slogan}>Healing begins here...</Text>
          <Pressable style={styles.button} onPress={handleLoginButtonClick}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent overlay
    padding: 20,
  },
  appName: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center",
  },
  slogan: {
    fontSize: 24,
    color: "#ffffff",
    marginBottom: 30,
    textAlign: "center",
    fontStyle: "italic",
    fontFamily: "monospace",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default index;

// -> "/"
