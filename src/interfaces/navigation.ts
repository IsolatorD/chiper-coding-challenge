import { NativeStackScreenProps } from "@react-navigation/native-stack";

export interface NewsScreenProps {
  title: string;
  url: string;
}

export type MainNavigationParamList = {
  Home: undefined;
  NewsDetails: NewsScreenProps;
}

export type HomeScreenProps = NativeStackScreenProps<MainNavigationParamList, 'Home'>;
export type NewsDetailsScreenProps = NativeStackScreenProps<MainNavigationParamList, 'NewsDetails'>;