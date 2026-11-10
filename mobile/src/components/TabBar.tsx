import { Pressable, StyleSheet, Text, View } from "react-native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as theme from "../theme";

// Home Base's bottom tab bar, drawn to DESIGN.md: the current tab's
// label in Night ink and its icon in Porch light deep.
export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      accessibilityRole="tablist"
      style={[styles.bar, { paddingBottom: insets.bottom + theme.spacing[1] }]}
    >
      {state.routes.map((route, index) => {
        const isCurrent = state.index === index;
        const label = descriptors[route.key].options.title ?? route.name;

        function onPress() {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isCurrent && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        }

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            accessibilityRole="tab"
            accessibilityState={{ selected: isCurrent }}
            accessibilityLabel={label}
            style={styles.item}
          >
            {/* Icon placeholder: a later task swaps in a line icon. */}
            <View style={[styles.icon, isCurrent && styles.iconCurrent]} />
            <Text style={[styles.label, isCurrent && styles.labelCurrent]}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    backgroundColor: theme.white,
    borderTopWidth: 1,
    borderTopColor: theme.slate2,
    paddingTop: theme.spacing[1],
  },
  item: {
    flex: 1,
    alignItems: "center",
    paddingVertical: theme.spacing[1],
  },
  icon: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: theme.chipsCorner,
    borderColor: theme.paused,
    marginBottom: theme.spacing[0],
  },
  iconCurrent: {
    borderColor: theme.amberDeep,
  },
  label: {
    fontFamily: theme.figtree400,
    color: theme.ink2,
  },
  labelCurrent: {
    fontFamily: theme.figtree600,
    color: theme.ink,
  },
});
