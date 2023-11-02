import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import uuid from "react-native-uuid";
import questions from "../data/questions";

const QuestionCard = ({
  currQuestIndex,
  correctAnswer,
  selectedAnswer,
  checkAnswer,
  isButtonActive,
}) => {
  const question = questions[currQuestIndex].question;
  const answers = questions[currQuestIndex].answers;

  return (
    <View>
      <Text style={styles.question}>{question}</Text>
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
  question: {
    marginTop: 30,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    backgroundColor: "#00FFFF",
  },

  answer: {
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
  },
});

export default QuestionCard;
