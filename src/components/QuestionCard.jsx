import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import uuid from "react-native-uuid";

const QuestionCard = ({ question, answers, correctAnswer, selectedAnswer }) => {
  return (
    <View>
      <Text>{question}</Text>
      <View>
        {answers.map((answer) => (
          <TouchableOpacity
            key={uuid.v4()}
            style={{
              ...styles.answer,
              backgroundColor:
                answer === correctAnswer
                  ? "#90EE90"
                  : answer === selectedAnswer
                  ? "#FF6347"
                  : "#F0F8FF",
            }}
            onPress={() => checkAnswer(answer)}
            disabled={!isButtonActive}
          >
            <Text>{answer}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  answer: {
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
  },
});

export default QuestionCard;
