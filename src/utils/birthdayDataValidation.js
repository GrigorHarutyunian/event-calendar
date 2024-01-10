export function validateBirthdayDate(year, month, day) {
  const ourDate = new Date(year, month, day);

  if (
    ourDate.getFullYear() === year &&
    ourDate.getMonth() === month &&
    ourDate.getDate() === day
  ) {
    const today = new Date();
    const minAgeDate = new Date(today);
    minAgeDate.setFullYear(today.getFullYear() - 120);
    const maxAgeDate = new Date(today);
    maxAgeDate.setFullYear(today.getFullYear() - 5);

    if (ourDate >= minAgeDate && ourDate <= maxAgeDate) {
      return true;
    }
    return false;
  }
  return false;
}
