import { Modal, StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import Results from "./Results";

const ModalVindow = ({
  score,
  isVisible,
  onBtnPress,
  isResultVisible,
  seeResult,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modal_container}>
        <View style={styles.content}>
          <Text style={styles.text}>
            Ваш результат {score} правильних відповідей
          </Text>
          <Button text={"Спробувати ще раз"} onBtnPress={onBtnPress} />
          {!isResultVisible ? (
            <Button text={"Попередні результати"} onBtnPress={seeResult} />
          ) : (
            <Results />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#F0F8FF",
  },

  text: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default ModalVindow;
