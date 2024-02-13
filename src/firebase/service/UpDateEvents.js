import { getDatabase, ref, update, get } from "firebase/database";
import { database } from "../firebase-config";
import { GetEvents } from "./GetEvents";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { checkOverlap } from "./utils/checkOverlap";
import { upDateEvent } from "./utils/upDateEvent";
import { type } from "@testing-library/user-event/dist/type";
import { toast } from "react-hot-toast";
export const upDateEvents = async (
  date,
  title,
  time,
  dispatch,
  icon,
  description,
  user,
  friendsInfo
) => {
  const userEmail = user.email;
  const userId = user.id;
  let usersIdArr = [userId];
  let userEmailArr = [userEmail];
  friendsInfo.forEach((friends) => {
    usersIdArr = [...usersIdArr, friends.id];
    userEmailArr = [...userEmailArr, friends.email];
  });

  if (usersIdArr.length === 1) {
    let res = await checkOverlap(userId, date, time);
    if (!res) {
      const email = user.email;
      await upDateEvent(
        userId,
        date,
        time,
        title,
        icon,
        description,
        dispatch,
        (type = "individual"),
        userEmailArr[0]
      );

      // toast.loading("Saving...");
      toast.success("Event added to your calendar.");
    } else {
      console.log("Oops! Time range overlaps with existing busy hours for,You");
      toast.error("Event failed to add to your calendar.");
    }
  } else {
    const overlaps = await Promise.all(
      usersIdArr.map(async (userId, i) => {
        let res = await checkOverlap(userId, date, time);
        let mail = i === 0 ? "Youu" : friendsInfo[i - 1].email;
        return { userId: userId, res: res, mail: mail };
      })
    );
    console.log(overlaps);
    const overLapsResponse = overlaps.filter((overlap) => {
      return overlap.res;
    });

    // If there is no overlap for any user, proceed with the update for all users
    if (overLapsResponse.length === 0) {
      await Promise.all(
        usersIdArr.map(
          async (userId, i) =>
            await upDateEvent(
              userId,
              date,
              time,
              title,
              icon,
              description,
              dispatch,
              (type = "group"),
              userEmailArr[i]
            )
        )
      );
      // toast.success(`Event added to the calendar.`);
    } else {
      overLapsResponse.forEach((over) => {
        console.log(
          "Oops! Time range overlaps with existing busy hours for ",
          over.mail ? over.mail : "You"
        );
        toast.error(`Event failed to add to ${over.email}'s calendar.`);
      });
    }
  }
  GetEvents(dispatch, date, userId);
};
