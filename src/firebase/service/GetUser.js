import { ref, get } from "firebase/database";
import { database } from "../firebase-config";
export const getUser = async (userId) => {
  const path = `calendars/${userId}`;
  const eventRef = ref(database, path);

  try {
    const user = await get(eventRef);
    if (user.exists()) {
      const us = user.val();

      return us;
    }
  } catch (error) {
    console.log(error);
  }
};
