import { getDatabase, ref, update, get } from "firebase/database";
import { app } from "./firebase-config";

const database = getDatabase(app);

export const upDateEvents = async (date, title, time) => {
  const userId = "user1";
  const path = `calendars/${userId}/events/${date}/`;
  const eventRef = ref(database, path);

  const firstDate = new Date(`${date} ${time.split("-")[0]}`);
  const secondDate = new Date(`${date} ${time.split("-")[1]}`);
  const arrTime = [firstDate, secondDate];
  update(eventRef, {
    time: time,
    title: title,
    busyHours: [...this.busyHours, arrTime],
  })
    .then(() => {
      console.log("Event added successfully");
    })
    .catch((error) => {
      console.error("Error adding event:", error);
    });
};
