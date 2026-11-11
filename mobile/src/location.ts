// Reading this phone's real position, with expo-location.
import * as Location from "expo-location";

export async function readCurrentPosition(): Promise<Location.LocationObject | null> {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.log("No location permission");
    return null;
  }
  return Location.getCurrentPositionAsync();
}
