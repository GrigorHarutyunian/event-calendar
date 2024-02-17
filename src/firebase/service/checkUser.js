import { database } from "../firebase-config";
import { ref, get } from "firebase/database";

export const checkUser = async (data) => {
  const userId = data.id;
  const path = `calendars/${userId}`;
  const eventRef = ref(database, path);

  try {
    const checkingUserSnapshot = await get(eventRef);
    if (checkingUserSnapshot.exists()) {
      const checkingUser = checkingUserSnapshot.val();

      const passwordFromDatabase = checkingUser?.description?.password;

      if (passwordFromDatabase === data.password) {
        return { success: true, user: checkingUser };
      } else {
        return { success: false, message: "User does not exist." };
      }
    } else {
      return { success: false, message: "User does not exist." };
    }
  } catch (error) {
    return { success: false, message: "Error checking user." };
  }
};
