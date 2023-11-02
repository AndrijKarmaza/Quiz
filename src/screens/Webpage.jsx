import { WebView } from "react-native-webview";

const Webpage = ({ url }) => (
  <WebView source={{ uri: url }} style={{ flex: 1, marginTop: 30 }} />
);
export default Webpage;
