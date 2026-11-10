import { ScrollView, StyleSheet, View } from "react-native";
import { Placeholder } from "../components/Placeholder";
import * as theme from "../theme";

export function DriveHomeScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Placeholder label="Page title and leaving note" />

        <Placeholder label="Porch-light arrival band with drive strip" />

        <Placeholder label="Miles and minutes left" />

        <Placeholder label="Updates from his phone timeline" />

        <Placeholder label="See him on the family map button" />

        <Placeholder label="Home spot row with change button" />
        <Placeholder label="Home address form with save button" />
        <Placeholder label="Your sharing note with My sharing link" />
        <Placeholder label="Confirmation toast (home spot saved, alert on or off)" />
      </ScrollView>
      <Placeholder
        label="Bottom tab bar — Family, Drive home, My sharing"
        height={64}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.slate,
  },
  content: {
    paddingTop: theme.spacing[6],
    paddingHorizontal: theme.spacing[3],
    paddingBottom: theme.spacing[4],
  },
});
