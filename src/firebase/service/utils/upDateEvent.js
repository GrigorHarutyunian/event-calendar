import { getDatabase, ref, update, get } from "firebase/database";
import { sendEmail } from "../../../utils/sendEmail";
import { database } from "../../firebase-config";
import { GetEvents } from "../GetEvents";
import { toast } from "react-hot-toast";

import { v4 as uuidv4 } from "uuid";

export async function upDateEvent(
  userId,
  date,
  time,
  title,
  icon,
  description,
  type,
  email,
  user
) {
  const path = `calendars/${userId}/events/${date}/`;
  const eventRef = ref(database, path);
  try {
    const existingData = await get(eventRef);
    const busyHours = existingData?.val()?.busyHours || [];
    const event = existingData?.val()?.event || [];
    const firstDate = new Date(`${date} ${time.split("-")[0]}`);
    const secondDate = new Date(`${date} ${time.split("-")[1]}`);
    const newTimeRange = [firstDate.getTime(), secondDate.getTime()];
    await update(eventRef, {
      event: [
        ...event,
        {
          id: uuidv4(),
          title: title,
          time: time,
          icon: icon,
          description: description,
          type: type,
          user: user,
        },
      ],
      busyHours: [...busyHours, newTimeRange],
    });
    console.log(email);
    //email [time, title, email]
    sendEmail(email, "hello");
    toast.success("Event added to your calendar.");
    console.log(`Event added successfully for user ${userId}`);
  } catch (error) {
    toast.error("Event failed to add to your calendar.");
    console.error(`Error adding event for user ${userId}:`, error);
  }
}
