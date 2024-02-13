import { database } from "../firebase-config";
import { getEvent } from "../../redux/slices/eventsSlice";
import { getDatabase, ref, get } from "firebase/database";
import { useSelector } from "react-redux";
import { addInivations } from "../../redux/slices/invitationSlice";

export const EventInivations = async (userId, dispatch) => {
  const path = `calendars/${userId}/events/`;
  const eventRef = ref(database, path);
  let eventsList = [];
  try {
    const allEvents = await get(eventRef);
    const updatedEvents = allEvents?.val() || [];
    for (let key in updatedEvents) {
      const oneDay = updatedEvents[key].event;
      const day = key;
      for (let event of oneDay) {
        if (event.type === "group") {
          const user = {
            avatar: event.user.image,
            mail: event.user.email,
          };
          eventsList = [...eventsList, { ...event, ...user, day: key }];
        }
      }
    }
  } catch (error) {
    console.error("Error fetching updated data:", error);
  }
  dispatch(addInivations(eventsList));
};
