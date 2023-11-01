import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Button from "./Button";

const ModalVindow = ({ score, isVisible, onBtnPress }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modal_container}>
        <View style={styles.content}>
          <Text>Ваш результат {score} правильних відповідей</Text>
          <Button text={"Спробувати ще раз"} onBtnPress={onBtnPress} />
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
});

export default ModalVindow;
