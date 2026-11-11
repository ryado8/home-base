import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Placeholder } from "../components/Placeholder";
import * as theme from "../theme";
import { readCurrentPosition } from "../location";
import { sendLocation } from "../backend";

async function handleTestPress() {
  const position = await readCurrentPosition();
  if (position === null) {
    Alert.alert("Permission error", "Location permission refused.");
    return;
  }

  try {
    const status = await sendLocation(position);
    Alert.alert("Status code: ", status.toString());
  } catch (e) {
    Alert.alert("Error: ", "Backend could not be reached.");
  }
}

export function MySharingScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Placeholder label="Page title and owner line" />

        {/* Test button for this task: sends one location right now. Replaced by the real sharing switch later. */}
        <Pressable style={styles.testButton} onPress={handleTestPress}>
          <Text style={styles.testButtonText}>Send my location now (test)</Text>
        </Pressable>

        <Placeholder label="Big sharing switch with status line" height={120} />

        <Placeholder label="What the family sees when paused note" />

        <Placeholder
          label="While your phone is locked panel — last location sent, sharing while locked and anywhere, and update frequency when moving or still"
          height={240}
        />

        <Placeholder label="Links to family map and Mike's drive" />

        <Placeholder label="Sharing paused or back on toast" />
      </ScrollView>
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
  testButton: {
    padding: theme.spacing[3],
    marginBottom: theme.spacing[3],
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
  },
  testButtonText: {
    fontSize: 16,
  },
});
