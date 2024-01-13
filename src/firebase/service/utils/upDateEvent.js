import { getDatabase, ref, update, get } from "firebase/database";
import { database } from "../../firebase-config";
import { GetEvents } from "../GetEvents";

export async function upDateEvent(
  userId,
  date,
  time,
  title,
  icon,
  description,
  dispatch,
  type
) {
  const path = `calendars/${userId}/events/${date}/`;
  const eventRef = ref(database, path);
  try {
    // Fetch existing data
    const existingData = await get(eventRef);
    const busyHours = existingData?.val()?.busyHours || [];
    const event = existingData?.val()?.event || [];
    const firstDate = new Date(`${date} ${time.split("-")[0]}`);
    const secondDate = new Date(`${date} ${time.split("-")[1]}`);
    const newTimeRange = [firstDate.getTime(), secondDate.getTime()];

    // Update the database with the new time range
    await update(eventRef, {
      event: [
        ...event,
        {
          id: time,
          title: title,
          time: time,
          icon: icon,
          description: description,
          type: type,
        },
      ],
      busyHours: [...busyHours, newTimeRange],
    });

    console.log(`Event added successfully for user ${userId}`);
  } catch (error) {
    console.error(`Error adding event for user ${userId}:`, error);
  }
}
