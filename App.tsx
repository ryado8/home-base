import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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
import { FamilyScreen } from "./src/screens/FamilyScreen";
import { MySharingScreen } from "./src/screens/MySharingScreen";

function phonesChipLabel(phones: number): string {
  return `${phones} family phones`;
}

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
    <View style={styles.container}>
      <FamilyScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.slate,
  },
  heading: {
    fontFamily: theme.gabarito800,
    color: theme.ink,
    fontSize: 48,
  },
  chip: {
    fontFamily: theme.figtree600,
    color: theme.ink2,
    backgroundColor: theme.slate2,
    borderRadius: theme.pillsCorner,
    padding: theme.spacing[0],
    marginTop: theme.spacing[0],
  },
});
