import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

const Results = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const value = await AsyncStorage.getItem("result");
        value && setResult(JSON.parse(value));
      } catch (error) {}
    }
    getData();
  }, []);

  return (
    <View style={styles.result_container}>
      {result.map((res, index) => (
        <Text key={uuid.v4()} style={styles.text}>
          {index + 1}: {res} правильних відповідей
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  result_container: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 16,
  },
});

export default Results;
