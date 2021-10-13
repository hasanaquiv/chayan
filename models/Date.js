let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let newDate = new Date();
let newMonth = newDate.getMonth();
let newDates = newDate.getDate();
let finalDate = newDates + " " + months[newMonth];

module.exports = finalDate;
