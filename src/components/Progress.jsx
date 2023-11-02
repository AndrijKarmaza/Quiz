import { StyleSheet, Text } from "react-native";

const Progress = ({ currQuestIndex, length }) => {
  return (
    <Text style={styles.progress}>
      Питання <Text style={styles.text}>{currQuestIndex + 1}</Text> / {length}
    </Text>
  );
};

const styles = StyleSheet.create({
  progress: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 0,
  },

  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00FF00",
  },
});

export default Progress;
