import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ text, onBtnPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => onBtnPress()}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#00FFFF",
    marginTop: 30,
    alignItems: "center",
  },

  text: {
    fontSize: 18,
  },
});

export default Button;
