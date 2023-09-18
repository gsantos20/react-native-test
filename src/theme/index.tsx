import { Text as DefaultText, View as DefaultView, SafeAreaView as DefaultSafeAreaView, TextInput as DefaultTextInput, } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export const THEME = {
  COLORS: {
    PRIMARY: "#7D12FE",

    GRAY_900: "#161819",
    GRAY_600: "#1C1D21",
    GRAY_500: "#29282D",
    GRAY_400: "#313135",
    GRAY_300: "#A0A0A7",
    GRAY_200: "#D5D4D9",
    WHITE: "#FFFFFF",

    OVERLAY: "rgba(0, 0, 0, 0.5)",
  },

  FONTS: {
    FAMILY: {
      PRIMARY: {
        REGULAR: "Poppins_400Regular",
        BOLD: "Poppins_700Bold",
        EXTRA_BOLD: "Poppins_800ExtraBold",
      }
    },

    SIZE: {
      XS: 12,
      SM: 14,
      MD: 16,
      LG: 18,
      XL: 20,
      XXL: 24,
      XXXL: 32,
    }
  },
};

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type SafeAreaViewProps = ThemeProps & DefaultSafeAreaView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultTextInput style={[{ backgroundColor }, style]} {...otherProps} />;
}


export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function SafeAreaView(props: SafeAreaViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}
