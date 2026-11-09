import { ScrollView, StyleSheet, View } from "react-native";
import { Placeholder } from "../components/Placeholder";
import * as theme from "../theme";

export function FamilyScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Placeholder label="Top bar - Home Base" />
        <Placeholder label="Privacy chip — 3 family phones" />
        <Placeholder
          label="Family map — streets, parks, water, home pin, Mike's amber marker and name tag, Jason's plum marker and name tag, and Mike's dotted route home"
          height={320}
        />
        <Placeholder label="Porch-light arrival band — Mike, miles remaining, and 6:12 pm arrival" />

        <Placeholder label="Work to Home drive strip — Mike's position" />

        <Placeholder label="Follow his drive button" />

        <Placeholder label="Family list heading" />

        <Placeholder label="Family member row — place, locked-phone update time, and status pill" />

        <Placeholder label="You heading" />

        <Placeholder label="My sharing row — switch with on or paused wording" />
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
