import { ScrollView, StyleSheet, View } from "react-native";
import { Placeholder } from "../components/Placeholder";
import * as theme from "../theme";
import { FamilyMember, Phone } from "../types";

const member: FamilyMember = {
  name: "Ryan",
  color: theme.aqua,
};

const phone: Phone = {
  owner: member,
  keyIssued: "Oct 5",
  lastCheckIn: "5:38 pm",
};

export function PhonesScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Placeholder label="Page header with back button, title and subtitle" />

        <Placeholder label="Family phones panel" />

        <Placeholder
          label={`Phone row — ${phone.owner.name}'s phone, key ${phone.keyIssued}, last check-in ${phone.lastCheckIn}`}
          height={128}
        />

        <Placeholder label="Blocked attempts count" />

        <Placeholder label="Replace a phone's key button" />

        <Placeholder label="Replace key confirmation box" />
        <Placeholder label="Key replaced toast" />
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
