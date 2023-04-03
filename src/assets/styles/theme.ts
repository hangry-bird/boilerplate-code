import baseStyled, {
    // css,
    // CSSProp,
    ThemedStyledInterface,
} from "styled-components";

const colors: { [key: string]: string } = {
    white: "#FFFFFF",
    black: "#000000",
    yellow: "#FFCD00",
    orange: "#ff7900",
    green: "#079f00",
    blue: "#174490",
    purple: "#800080",
    grey: "#666666",
    lightGrey: "#e9e9e9",
    operating: "rgba(7, 159, 0, 0.12);",
    operatingFont: "#079F00",
    waitOperating: "#F1EAFF",
    waitOperatingFont: "#7951CE",
    operated: "#E9E9E9",
    operatedFont: "#AFAFAF",


    yellow50: "#FFFBE5",
    yellow100: "#FFF1B3",
    yellow200: "#FFE880",
    yellow300: "#FFE366",
    yellow400: "#FFDA33",
    yellow500: "#FFD100",
    yellow550: "#E6BC00",   // Main
    yellow600: "#CCA700",
    yellow700: "#B29200",
    yellow800: "#997D00",
    yellow900: "#665300",
    darkYellow: "#332A00",

    green50: "#E5FFE9",
    green100: "#CCFFD4",
    green150: "#B3FFBE",
    green200: "#80FF93",
    green300: "#4CFF68",
    green400: "#00FF27",
    green500: "#00E523",
    green600: "#00CC1F",
    green700: "#00B21B",
    green800: "#009A17",
    green900: "#00660F",
    darkGreen: "#003308",

    orange50: "#FFF1E5",
    orange100: "#FFE3CC",
    orange150: "#FFD5B3",
    orange200: "#FFC899",
    orange300: "#FFAC66",
    orange400: "#FF9133",
    orange500: "#FF7500",
    orange600: "#EA05D6",
    orange700: "#B904A8",
    orange800: "#87037B",
    orange900: "#4D2300",
    darkOrange: "#331700",

    red50: "#FCE6E4",
    red100: "#F8CCC8",
    red150: "#F6B6B2",
    red200: "#F3A19B",
    red300: "#F08B85",
    red400: "#ED766E",
    red500: "#E74D41",
    red600: "#DA291C",
    red700: "#AC2016",
    red800: "#7F1810",
    red900: "#520F0A",
    darkRed: "#3B0B07",

    purple50: "#FFF0FD",
    purple100: "#FEBEF8",
    purple200: "#FDA5F5",
    purple300: "#FC8CF2",
    purple400: "#FC73EF",
    purple500: "#FB5AED",
    purple550: "#FA28E7",
    purple600: "#EA05D6",
    purple700: "#B904A8",
    purple800: "#87037B",
    purple900: "#55024D",
    darkPurple: "#230120",

    gray50: "#F5F5F5",
    gray100: "#EBEBEB",
    gray200: "#D9D9D9",
    gray300: "#CCCCCC",
    gray400: "#999999",
    gray500: "#808080",
    gray600: "#666666",
    gray700: "#404040",
    gray800: "#333333",
    gray900: "#1A1A1A",
};

const theme = {
    colors
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
