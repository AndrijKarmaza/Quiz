import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import questions from "../data/questions";
import { useState } from "react";
import uuid from "react-native-uuid";
import Button from "../components/Button";
import ModalVindow from "../components/ModalVindow";

const Quiz = () => {
  const [currQuestIndex, setCurrQuestIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [isButtonActive, setIsButtonActive] = useState(true);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(false);
  const [isModalvisible, setIsModalVisible] = useState(false);
  const [score, setScore] = useState(0);

  const checkAnswer = (answer) => {
    correct = questions[currQuestIndex]["correct_answer"];
    setCorrectAnswer(correct);
    setSelectedAnswer(answer);
    setIsButtonActive(false);
    answer === correct && setScore(score + 1);
    setIsNextButtonVisible(true);
  };

  const defaulDetting = () => {
    setSelectedAnswer(null);
    setCorrectAnswer(null);
    setIsButtonActive(true);
    setIsNextButtonVisible(false);
  };

  const onNextBtnPress = () => {
    setCurrQuestIndex(currQuestIndex + 1);
    defaulDetting();
  };

  const onResultBtnPress = () => {
    setIsModalVisible(true);
  };

  const newGamePlay = () => {
    defaulDetting();
    setIsModalVisible(false);
    setCurrQuestIndex(0);
    setScore(0);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/bg_image.jpg")}
      resizeMode="cover"
      style={styles.bg_image}
    >
      {!isModalvisible && (
        <>
          <Text>
            Питання {currQuestIndex + 1} / {questions.length}
          </Text>
          <Text>{questions[currQuestIndex].question}</Text>
          <View>
            {questions[currQuestIndex].answers.map((answer) => (
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
          {currQuestIndex === questions.length - 1 && isNextButtonVisible ? (
            <Button
              text={"Подивитись результат"}
              onBtnPress={onResultBtnPress}
            />
          ) : (
            isNextButtonVisible && (
              <Button text={"Наступне питання"} onBtnPress={onNextBtnPress} />
            )
          )}
        </>
      )}

      {isModalvisible && (
        <ModalVindow
          score={score}
          isVisible={isModalvisible}
          onBtnPress={newGamePlay}
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg_image: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 50,
  },

  answer: {
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
  },

  btn: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#00FFFF",
    marginTop: 30,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Quiz;
