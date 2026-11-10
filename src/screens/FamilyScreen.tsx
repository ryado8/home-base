import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Placeholder } from "../components/Placeholder";
import type { FamilyStackParams } from "../navigation";
import * as theme from "../theme";

function phonesChipLabel(phones: number): string {
  return `${phones} family phones`;
}

export function FamilyScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<FamilyStackParams>>();

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Placeholder label="Top bar - Home Base" />
        {/* The privacy chip opens Phones. */}
        <Pressable
          onPress={() => navigation.navigate("Phones")}
          accessibilityRole="button"
          accessibilityLabel={`${phonesChipLabel(3)}. Opens Phones`}
        >
          <Placeholder label={`Privacy chip — ${phonesChipLabel(3)} (tap to open Phones)`} />
        </Pressable>
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
