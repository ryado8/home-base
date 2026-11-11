// Settings the app needs that will change between testing and the real thing.

// Where the backend is: your Mac's address on the home Wi-Fi, for testing only.
// Plain http is only OK here because no real device keys exist yet (see decision 0001).
export const BACKEND_URL = "http://192.168.68.100:8000";

// Whose phone this is, as the backend's NAMES list spells it.
export const MY_NAME = "Ryan";

// A stand-in key until each phone gets its real secret one.
export const DEVICE_KEY = "dev-placeholder-key";
