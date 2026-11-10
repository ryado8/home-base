import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabBar } from "./components/TabBar";
import { FamilyScreen } from "./screens/FamilyScreen";
import { PhonesScreen } from "./screens/PhonesScreen";
import { DriveHomeScreen } from "./screens/DriveHomeScreen";
import { MySharingScreen } from "./screens/MySharingScreen";

// The screens inside the Family tab: Family itself, and Phones,
// which opens on top of it, so the Family tab stays marked on Phones.
export type FamilyStackParams = {
  Family: undefined;
  Phones: undefined;
};

const FamilyStack = createNativeStackNavigator<FamilyStackParams>();

function FamilyTab() {
  return (
    <FamilyStack.Navigator screenOptions={{ headerShown: false }}>
      <FamilyStack.Screen name="Family" component={FamilyScreen} />
      <FamilyStack.Screen name="Phones" component={PhonesScreen} />
    </FamilyStack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();

// The three tabs from DESIGN.md, drawn by our own TabBar.
export function AppTabs() {
  return (
    <Tabs.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="FamilyTab" component={FamilyTab} options={{ title: "Family" }} />
      <Tabs.Screen name="DriveHome" component={DriveHomeScreen} options={{ title: "Drive home" }} />
      <Tabs.Screen name="MySharing" component={MySharingScreen} options={{ title: "My sharing" }} />
    </Tabs.Navigator>
  );
}
