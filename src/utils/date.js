export const epochToLocalDateTime = (epochTime) => {
  const months = [
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

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dateTime = new Date(epochTime * 1000);

  const day = days[dateTime.getDay()];
  const month = months[dateTime.getMonth()];
  const date = dateTime.getDate();
  const year = dateTime.getFullYear();

  const hours = dateTime.getHours().toString().padStart(2, "0");
  const minutes = dateTime.getMinutes().toString().padStart(2, "0");

  return `${day}, ${month} ${date}, ${year} ${hours}:${minutes}`;
}

export const getDayOfWeek = (dateString) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  return days[dayIndex];
};