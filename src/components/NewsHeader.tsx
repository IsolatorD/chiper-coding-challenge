import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { SUBREDDITS } from "../constants/api";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { INewsHeaderProps, ITab } from "../interfaces";

const Newsheader: React.FC<INewsHeaderProps> = ({ subreddit, onPress }) => {
  return (
    <View
      style={styles.header}
    >
      {
        SUBREDDITS.map(({ label, value }: ITab, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(value)}
            style={[
              styles.tab,
              subreddit === value && styles.activeTab
            ]}
          >
            <Text
              style={[
                styles.tabText,
                subreddit === value && styles.tabTextActive
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: SIZES.width,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.secondary
  },
  tab: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeTab: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    ...FONTS.body,
    color: COLORS.primary,
    textTransform: 'capitalize'
  },
  tabTextActive: {
    color: COLORS.white
  }
})

export default Newsheader;