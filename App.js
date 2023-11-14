import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import Webpage from "./src/screens/Webpage";
import Quiz from "./src/screens/Quiz";

export default function App() {
  const baseURL = "https://rozetka.com.ua/ua/";

  const [isNetworkOk, setIsNetworkOk] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPage() {
      try {
        setIsLoading(true);
        const res = await axios.get(baseURL);
        res.status === 200 && setIsNetworkOk(true);
      } catch {
        setIsNetworkOk(false);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPage();
  }, []);

  const onCloseBtnClick = () => {
    setIsNetworkOk(false);
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  } else if (!isLoading && isNetworkOk) {
    return <Webpage url={baseURL} onPress={onCloseBtnClick} />;
  } else {
    return <Quiz />;
  }
}
