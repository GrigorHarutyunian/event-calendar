import { database } from "../firebase-config";
import { getEvent } from "../../redux/slices/eventsSlice";
import { getDatabase, ref, get } from "firebase/database";
import { useSelector } from "react-redux";
import { addInivations } from "../../redux/slices/invitationSlice";
import { addOwnEvents } from "../../redux/slices/ownEventsSlice";

export const EventInivations = async (userId, dispatch) => {
  const path = `calendars/${userId}/events/`;
  const eventRef = ref(database, path);
  let eventsList = [];
  let ownEventsList = [];
  try {
    const allEvents = await get(eventRef);
    const updatedEvents = allEvents?.val() || [];

    for (let key in updatedEvents) {
      const oneDay = updatedEvents[key].event;
      const day = key;

      for (let event of oneDay) {
        if (event.type === "group" && event.user.id !== userId) {
          const user = {
            avatar: event.user.image,
            mail: event.user.email,
          };
          eventsList = [...eventsList, { ...event, ...user, day: key }];
        } else if (event.user.id === userId) {
          const user = {
            avatar: event.user.image,
            mail: event.user.email,
          };

          ownEventsList = [...ownEventsList, { ...event, ...user, day: key }];
        }
      }
    }
  } catch (error) {
    console.error("Error fetching updated data:", error);
  }

  dispatch(addOwnEvents(ownEventsList));
  dispatch(addInivations(eventsList));
};
