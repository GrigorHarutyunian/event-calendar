import { database } from "../firebase-config";
import { getDatabase, ref, get } from "firebase/database";
import { useDispatch } from "react-redux";
import { getFriendsList } from "../../redux/slices/userFriendsSlice";
export const GetFriendsList = async (dispatch) => {
  let newFriendsArray = [];

  const path = `calendars/`;
  const eventRef = ref(database, path);

  try {
    const allData = await get(eventRef);
    const allDataObj = allData.val();
    for (let key in allDataObj) {
      newFriendsArray = [
        ...newFriendsArray,
        { id: key, email: allDataObj[key].description.email },
      ];
    }
    dispatch(getFriendsList(newFriendsArray));
  } catch (error) {
    console.error("Error fetching updated data:", error);
  }
};
