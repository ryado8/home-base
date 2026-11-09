import { ScrollView, StyleSheet, View } from "react-native";
import { Placeholder } from "../components/Placeholder";
import * as theme from "../theme";

export function MySharingScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Placeholder label="Page title and owner line" />

        <Placeholder label="Big sharing switch with status line" height={120} />

        <Placeholder label="What the family sees when paused note" />

        <Placeholder
          label="While your phone is locked panel — last location sent, sharing while locked and anywhere, and update frequency when moving or still"
          height={240}
        />

        <Placeholder label="Links to family map and Mike's drive" />

        <Placeholder label="Sharing paused or back on toast" />
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
