import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const COLORS = {
  primary: '#3498db',
  secondary: '#bdc3c7',
  white: '#ffffff',
  black: '#000000',
}

const SIZES = {
  base: 8,
  padding: 16,
  // Fonts
  title: 18,
  body: 16,
  caption: 14,
  // App Dimensions
  width,
  height,
}

const FONTS = {
  title: {
    fontSize: SIZES.title,
    lineHeight: 20,
  },
  body: {
    fontSize: SIZES.body,
    lineHeight: 20,
  },
  caption: {
    fontSize: SIZES.caption,
    lineHeight: 20,
  },
}

export { COLORS, SIZES, FONTS };