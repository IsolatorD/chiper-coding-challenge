import React from "react";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
import NewsList from "../components/NewsList";
import { COLORS } from "../constants/theme";
import { HomeScreenProps } from "../interfaces/navigation";

const Home: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <NewsList />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  }
})

export default Home;