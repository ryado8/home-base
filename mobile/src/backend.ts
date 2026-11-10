// How the app proves to the Home Base backend that it's one of the family's phones.
// The choice and its reasons: docs/decisions/0001-keeping-strangers-out.md

/**
 * The headers every request to the backend carries, so the backend can tell
 * which family phone is calling. Takes this phone's secret device key.
 */
export function authHeaders(deviceKey: string): Record<string, string> {
  return {
    Authorization: `Bearer ${deviceKey}`,
  };
}
