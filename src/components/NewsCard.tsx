import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { INewsCardProps } from "../interfaces";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime)

const NewsCard: React.FC<INewsCardProps> = ({ newsItem, onPress }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.card}
    >
      <View
        style={styles.cardImage}
      >
        <Image
          source={{ uri: newsItem.thumbnail }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View
        style={styles.cardContent}
      >
        <View
          style={styles.newsDate}
        >
          <Text
            style={styles.date}
          >
            {dayjs.unix(newsItem.created).fromNow()}
          </Text>
        </View>
        <Text
          style={styles.title}
        >
          {newsItem.title}
        </Text>
        <View
          style={styles.cardFooter}
        >
          <Text
            style={styles.footerText}
          >
            {newsItem.author}
          </Text>
          <Text
            style={styles.footerText}
          >
            Score: {newsItem.score}
          </Text>
          <Text
            style={styles.footerText}
          >
            {newsItem.num_comments} comments
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    marginVertical: SIZES.base
  },
  cardImage: {
    width: 100,
    height: '100%',
  },
  image: {
    width: "100%",
    height: "100%",
  },
  cardContent: {
    flex: 2,
    paddingHorizontal: SIZES.base,
  },
  cardFooter: {
    paddingVertical: SIZES.base,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  date: {
    ...FONTS.caption,
    color: COLORS.black,
  },
  newsDate: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: SIZES.base / 2
  },
  title: {
    ...FONTS.title,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  footerText: {
    ...FONTS.body,
    color: COLORS.black,
  }
})

export default NewsCard;