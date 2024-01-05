export const SorginEventsArray = (arr) => {
  if (arr.length > 1) {
    return arr.sort((a, b) => {
      const event1 = a.time.split(":")[0];
      const event2 = b.time.split(":")[0];

      return event1 - event2;
    });
  }
  return arr;
};
