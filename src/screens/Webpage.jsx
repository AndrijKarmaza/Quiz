import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet, TouchableOpacity } from "react-native";

const Webpage = ({ url, onPress }) => (
  <>
    <WebView source={{ uri: url }} style={{ flex: 1, marginTop: 30 }} />
    <TouchableOpacity style={styles.close} onPress={onPress}>
      <Icon name="closecircleo" size={30} color={"#fff"} />
    </TouchableOpacity>
  </>
);

const styles = StyleSheet.create({
  close: {
    position: "absolute",
    top: 100,
    right: 30,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#667b68",
    opacity: 0.8,
    alignItems: "center",
  },
});
export default Webpage;
