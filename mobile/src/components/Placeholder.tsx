import { StyleSheet, Text, View } from "react-native";
import * as theme from "../theme";

// A dashed, labelled box standing in for one part of a screen.
// Later tasks replace each one with the real part.

type PlaceholderProps = {
  label: string;
  height?: number;
};

export function Placeholder({ label, height }: PlaceholderProps) {
  return (
    <View style={{ ...styles.box, height }}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: theme.paused,
    borderRadius: theme.rowsCorner,
    backgroundColor: theme.white,
    padding: theme.spacing[3],
    marginBottom: theme.spacing[2],
    justifyContent: "center",
  },
  label: {
    fontFamily: theme.figtree600,
    color: theme.ink2,
  },
});
