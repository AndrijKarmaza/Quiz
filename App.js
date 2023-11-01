import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import Webpage from "./src/pages/Webpage";
import Quiz from "./src/pages/Quiz";

export default function App() {
  const baseURL = "https://rozeta.com.ua/ua/";

  const [isNetworkOk, setIsNetworkOk] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPage() {
      try {
        setIsLoading(true);
        const res = await axios.get(baseURL);
        res.status !== 200 && setIsNetworkOk(false);
      } catch {
        setIsNetworkOk(false);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPage();
  }, []);

  return (
    <>
      {isLoading && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
      {isNetworkOk ? <Webpage url={baseURL} /> : <Quiz />}
    </>
  );
}
