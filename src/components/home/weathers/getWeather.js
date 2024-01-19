import { Autumn } from "./autumn/Autumn";
import { Spring } from "./spring/Spring";
import { Summer } from "./summer/Summer";
import { Winter } from "./winter/Winter";

export const getWeather = (month) => {
  switch (month) {
    case 11:
    case 0:
    case 1:
      return <Winter />;
    case 2:
    case 3:
    case 4:
      return <Spring />;
    case 5:
    case 6:
    case 7:
      return <Summer />;
    case 8:
    case 9:
    case 10:
      return <Autumn />;
  }
};
