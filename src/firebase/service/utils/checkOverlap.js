import { getDatabase, ref, update, get } from "firebase/database";
import { database } from "../../firebase-config";
export async function checkOverlap(userId, date, time) {
  const path = `calendars/${userId}/events/${date}/`;
  const eventRef = ref(database, path);
  try {
    // Fetch existing data
    const existingData = await get(eventRef);
    const busyHours = existingData?.val()?.busyHours || [];
    const firstDate = new Date(`${date} ${time.split("-")[0]}`);
    const secondDate = new Date(`${date} ${time.split("-")[1]}`);
    const newTimeRange = [firstDate.getTime(), secondDate.getTime()];

    // Check for overlaps
    return busyHours.some((existingRange) => {
      return (
        (existingRange[0] <= newTimeRange[0] &&
          existingRange[1] >= newTimeRange[0]) ||
        (existingRange[1] >= newTimeRange[1] &&
          existingRange[0] <= newTimeRange[1])
      );
    });
  } catch (error) {
    console.error("Error checking overlap:", error);
    return true; // Treat errors as overlaps to prevent updates
  }
}
