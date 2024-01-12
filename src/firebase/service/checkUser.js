import { database } from "../firebase-config";
import { ref, get } from "firebase/database";

export const checkUser = async (data) => {
  console.log(data);
  const userId = data.id;
  const path = `calendars/${userId}`;
  const eventRef = ref(database, path);

  try {
    const checkingUserSnapshot = await get(eventRef);
    if (checkingUserSnapshot.exists()) {
      const checkingUser = checkingUserSnapshot.val();

      // Access the password property from checkingUser
      const passwordFromDatabase = checkingUser?.description?.password;

      // Now you can compare the passwords
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
