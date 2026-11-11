// How the app proves to the Home Base backend that it's one of the family's phones.
// The choice and its reasons: docs/decisions/0001-keeping-strangers-out.md

import type { LocationObject } from "expo-location";
import { BACKEND_URL, DEVICE_KEY, MY_NAME } from "./config";

/**
 * The headers every request to the backend carries, so the backend can tell
 * which family phone is calling. Takes this phone's secret device key.
 */
export function authHeaders(deviceKey: string): Record<string, string> {
  return {
    Authorization: `Bearer ${deviceKey}`,
  };
}

export async function sendLocation(location: LocationObject): Promise<number> {
  const loc = {
    who: MY_NAME,
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    time: new Date(location.timestamp).toISOString(),
  };
  const response = await fetch(`${BACKEND_URL}/locations`, {
    method: "POST",
    headers: {
      ...authHeaders(DEVICE_KEY),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loc),
  });

  return response.status;
}
