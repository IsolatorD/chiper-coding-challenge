export interface INewsCardProps {
  newsItem: INews;
  onPress: () => void;
}

export interface INewsHeaderProps {
  subreddit: string;
  onPress: (subreddit: string) => void;
}

export interface ITab {
  label: string;
  value: string;
}

export interface INews {
  thumbnail: string;
  created: number;
  title: string;
  author: string;
  score: number;
  num_comments: number;
  permalink: string;
}