import { StyleSheet, Text as ReactText, View, Dimensions } from "react-native";
import Colors from "./Colors";

const windowWidth = Dimensions.get("window").width;

interface MyTextProps {
  fz?: number;
  rfz?: number;
  fw?: string;
  w300?: boolean;
  w400?: boolean;
  w500?: boolean;
  w600?: boolean;
  w700?: boolean;
  co?: string;
  primary?: boolean;
  shaded?: boolean;
  white?: boolean;
  red?: boolean;
  left?: boolean;
  center?: boolean;
  right?: boolean;
  style?: any;
  children?: any;
}
const defaultMyTextProps: MyTextProps = {
  fz: 14,
  fw: "400",
  co: "gray",
  w300: false,
  w400: false,
  w500: false,
  w600: false,
  w700: false,
  primary: false,
  shaded: false,
  white: false,
  red: false,
  style: {},
};

export const MyText = ({
  fz,
  rfz,
  fw,
  co,
  w300,
  w400,
  w500,
  w600,
  w700,
  primary,
  shaded,
  white,
  red,
  left,
  center,
  right,
  style,
  children,
}: MyTextProps) => {
  return (
    <ReactText
      style={[
        {
          color:
            co == "primary" || primary
              ? Colors.primary
              : co == "shaded" || shaded
              ? Colors.shadedText
              : co == "white" || white
              ? Colors.white
              : co == "red" || red
              ? Colors.red
              : Colors.textGray,
          fontSize: rfz ? (rfz / 500) * windowWidth : fz,
          fontWeight: w300
            ? "300"
            : w400
            ? "400"
            : w500
            ? "500"
            : w600
            ? "600"
            : w700
            ? "700"
            : fw,
          textAlign: center ? "center" : right ? "right" : "left",
        },
        style,
      ]}
    >
      {children}
    </ReactText>
  );
};

MyText.defaultProps = defaultMyTextProps;

const styles = StyleSheet.create({});
