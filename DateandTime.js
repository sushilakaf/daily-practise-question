// write a javascript program to display the current day and time
const now = new Date(); // create an object
const daysofweek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]; //list of days in array store in daysofweek variable
const daysofweeks = daysofweek[now.getDay()];

const hour = now.getHours();
const minutes = now.getMinutes();
const sec = now.getSeconds();

console.log(`current day and time is ${daysofweeks},${hour}:${minutes}:${sec}`);
