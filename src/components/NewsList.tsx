import React, { useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl
} from 'react-native'
import NewsCard from "./NewsCard";
import { ReditService } from "../services/ReditService";
import Newsheader from "./NewsHeader";
import { useNavigation } from "@react-navigation/native";

const Reddit = new ReditService();

const NewsList: React.FC = () => {
  const { navigate } = useNavigation()
  const [news, setNews] = useState([]);
  const [subreddit, selectedSubreddit] = useState<string>('new')
  const [refreshing, setRefreshing] = useState(false)
  const scrollRef = useRef<FlatList>(null)

  useEffect(() => {
    getNews('new');
  }, [])

  const getNews = async (subreddit: string) => {
    try {
      const posts = await Reddit.getPosts(subreddit);
      setNews(posts);
    } catch (err) {
      console.log('GetNews Error: ', err);
    }
  }

  const onPressNewsItem = async (item: any) => {
    navigate('NewsDetails', {
      title: item.title,
      url: item.permalink
    })
  }

  const onChangeSubreddit = async (subreddit: string) => {
    selectedSubreddit(subreddit);
    scrollRef.current?.scrollToIndex({
      index: 0,
      animated: true
    })
    await getNews(subreddit)
  }

  const onRefresh = async () => {
    setRefreshing(true)
    await getNews(subreddit)
    setRefreshing(false)
  }

  return (
    <View
      style={styles.container}
    >
      <Newsheader subreddit={subreddit} onPress={onChangeSubreddit}/>
      <FlatList
        ref={scrollRef}
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        }
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <NewsCard key={index} newsItem={item} onPress={() => onPressNewsItem (item)}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default NewsList;