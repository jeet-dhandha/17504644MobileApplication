import color from "color";
import {
  black,
  green300,
  green500,
  grey400,
  grey900,
  pinkA400,
  white,
} from "./colors";

export default {
  roundness: {
    round: 100,
    medium: 10,
    large: 20,
    card: 30,
  },
  borderWidth: {
    slim: 0.5,
    bordered: 1,
  },
  colors: {
    primary: "#BCAD9C",
    accent: "#fff",
    background: "#2F3238",
    primaryLight: "#D08B55",
    surface: white,
    error: "#B00020",
    success: green300,
    text: "#415E29",
    placeholder: "#F2AB73",
    // placeholder: Color("#F9E7C5", "hex").alpha(0.5).rgb().toString(),
  },
  animation: {
    scale: 1.0,
  },
  textSize: {
    small: 12,
    medium: 14,
    large: 16,
  },
  padding: {
    extra_small: 2.5,
    small: 5,
    medium: 7.5,
    large: 10,
    extra_large: 15,
  },
};
