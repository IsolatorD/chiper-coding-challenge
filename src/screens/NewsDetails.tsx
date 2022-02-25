import React from "react";
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import WebView from "react-native-webview";
import { COLORS, SIZES } from "../constants/theme";
import { NewsDetailsScreenProps } from "../interfaces/navigation";

const NewsDetails: React.FC<NewsDetailsScreenProps> = ({ route }) => {
  const { url } = route.params
  return (
    <SafeAreaView
      style={styles.container}
    >
      <WebView
        style={styles.webview}
        textZoom={200}
        source={{
          uri: 'https://www.reddit.com/' + url
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  webview: {
    width: SIZES.width,
    height: SIZES.height
  }
});

export default NewsDetails

