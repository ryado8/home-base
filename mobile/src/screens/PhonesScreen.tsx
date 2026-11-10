import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Back control: returns to the screen Phones opened from. */}
        <Pressable
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
          accessibilityLabel="Back to Family"
          style={styles.back}
        >
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <Placeholder label="Page header — title and subtitle" />

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
  back: {
    alignSelf: "flex-start",
    paddingVertical: theme.spacing[2],
    marginBottom: theme.spacing[1],
  },
  backText: {
    fontFamily: theme.figtree600,
    color: theme.ink,
    fontSize: 16,
  },
});
