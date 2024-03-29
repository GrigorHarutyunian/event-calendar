import { getDatabase, ref, update, get } from "firebase/database";
import { database } from "../firebase-config";

export const addUser = async (data) => {
  const userId = data.id;
  const path = `calendars/${userId}`;
  const eventRef = ref(database, path);

  await update(eventRef, {
    description: {
      ...data,
    },
  });
};
