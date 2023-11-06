import { StyleSheet, View, Text } from "react-native";
import Button from "./Button";

const Welcome = ({ onStartBtnPress }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Перевір свої знання правил дороднього руху</Text>
    <Button text={"Розпочати"} onBtnPress={onStartBtnPress}></Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignItems: "center",
    textAlign: "center",
    fontSize: 24,
  },
});

export default Welcome;
