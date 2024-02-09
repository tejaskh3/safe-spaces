import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { quizQuestions } from "./quiz-questions";
// ... other imports
import { useRouter } from "expo-router";

const Quiz = () => {
  const router = useRouter();

  const [questions, setQuestions] = useState(quizQuestions);
  const [ques, setQues] = useState(0);
  const [options] = useState(["Never", "Rarely", "Sometimes", "Frequently"]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const showResultsHandler = () => {
    if (score > 7) {
      router.replace("/(tabs)/consultants");
    } else if (score > 3) {
      router.replace("/(tabs)/home");
    } else {
      router.replace("/(tabs)/music");
    }
  };

  const handleNextPress = () => {
    setQues(ques + 1);
  };
  const handleSelectedOption = (selectedOption) => {
    if (selectedOption === "Frequently") {
      setScore(score + 1);
    }
    handleNextPress();
  };
  const [resultText] = useState([
    "Seek Help, please contact consultant",
    "Have some clear goals,Go set them",
    "your are okay just increase your focus go listen meditative music",
  ]);
  if (ques == questions.length) {
    let resultTextIndex = score > 7 ? 0 : score > 3 ? 1 : 2;
    return (
      <View style={styles.container}>
        <Text>{resultText[resultTextIndex]}</Text>
        <Button title="See Results" onPress={showResultsHandler} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>LOADING...</Text>
        </View>
      ) : (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>Q. {questions[ques]}</Text>
          </View>
          <View style={styles.options}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButtom}
                onPress={() => handleSelectedOption(option)}
              >
                <Text style={styles.option}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.bottom}>
            {ques !== 9 && (
              <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
            )}
            {ques === 9 && (
              <TouchableOpacity
                style={styles.button}
                // onPress={handleShowResult}
              >
                <Text style={styles.buttonText}>SHOW RESULTS</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 32,
    fontWeight: "700",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#1A759F",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  optionButtom: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#34A0A4",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: "100%",
  },
});
