export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const days = [];

for (let i = 1; i <= 31; i++) {
  days.push(i);
}
export const years = [];
const data = new Date();
const currentYear = data.getFullYear();
for (let i = currentYear; i > currentYear - 100; i--) {
  years.push(i);
}

export function toDate(month, day, year) {
  return new Date(year, month, day);
}
