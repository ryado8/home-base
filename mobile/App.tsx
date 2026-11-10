import { StatusBar } from "expo-status-bar";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Gabarito_500Medium,
  Gabarito_800ExtraBold,
} from "@expo-google-fonts/gabarito";
import {
  Figtree_400Regular,
  Figtree_600SemiBold,
} from "@expo-google-fonts/figtree";
import * as theme from "./src/theme";
import { AppTabs } from "./src/navigation";

// React Navigation's default look, with Street slate behind every screen.
const navigationTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: theme.slate },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Gabarito_500Medium,
    Gabarito_800ExtraBold,
    Figtree_400Regular,
    Figtree_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <AppTabs />
      </NavigationContainer>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
