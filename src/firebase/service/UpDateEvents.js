import { getDatabase, ref, update, get } from "firebase/database";
import { database } from "../firebase-config";
import { GetEvents } from "./GetEvents";
import { useDispatch } from "react-redux";
export const upDateEvents = async (date, title, time, dispatch) => {
  const userId = "user1";
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

    // Check for overlaps
    const overlaps = busyHours.some((existingRange) => {
      return (
        (existingRange[0] <= newTimeRange[0] &&
          existingRange[1] >= newTimeRange[0]) ||
        (existingRange[1] >= newTimeRange[1] &&
          existingRange[0] <= newTimeRange[1])
      );
    });

    if (overlaps) {
      console.log("Oops! Time range overlaps with existing busy hours.");
    } else {
      console.log("Adding new time range...");

      // Update the database with the new time range
      await update(eventRef, {
        event: [
          ...event,
          {
            title: title,
            time: time,
          },
        ],
        busyHours: [...busyHours, newTimeRange],
      });

      GetEvents(dispatch, date);
      console.log("Event added successfully");
    }
  } catch (error) {
    console.error("Error adding event:", error);
  }
};
