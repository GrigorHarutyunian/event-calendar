import { database } from "../firebase-config";
import { getEvent } from "../../redux/slices/eventsSlice";
import { getDatabase, ref, get } from "firebase/database";
import { useSelector } from "react-redux";

export const GetEvents = async (dispatch, date, userId) => {
  const path = `calendars/${userId}/events/${date}/`;
  const eventRef = ref(database, path);

  try {
    const updatedData = await get(eventRef);
    const updatedEvents = updatedData?.val()?.event || [];
    const updatedBusyHours = updatedData?.val()?.busyHours || [];

    dispatch(getEvent({ events: updatedEvents, busyHours: updatedBusyHours }));
  } catch (error) {
    console.error("Error fetching updated data:", error);
  }
};
