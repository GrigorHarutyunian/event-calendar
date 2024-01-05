import { database } from "../firebase-config";
import { getDatabase, ref, get, update } from "firebase/database";
import { GetEvents } from "./GetEvents";

export const RemoveEvent = async (
  dispatch,
  date,
  itemIdToRemove1,
  itemIdToRemove2
) => {
  const userId = "user1";
  const path1 = `calendars/${userId}/events/${date}/event`;
  const path2 = `calendars/${userId}/events/${date}/busyHours`;
  const eventRef1 = ref(database, path1);
  const eventRef2 = ref(database, path2);

  try {
    const snapshot1 = await get(eventRef1);
    const snapshot2 = await get(eventRef2);
    const eventArray = snapshot1?.val() || [];
    const busyHoursArray = snapshot2?.val() || [];

    const upDateEventsArray = eventArray.filter(
      (item) => item.id !== itemIdToRemove1 && item.id !== itemIdToRemove2
    );
    const upDateBusyHoursArray = busyHoursArray.filter(
      (item) => item[0] !== new Date(itemIdToRemove2).getTime()
    );

    await update(ref(database, `calendars/${userId}/events/${date}`), {
      event: upDateEventsArray,
      busyHours: upDateBusyHoursArray,
    });

    GetEvents(dispatch, date);
    console.log(`Items removed successfully.`);
  } catch (error) {
    console.error("Error removing items from the database:", error);
  }
};
