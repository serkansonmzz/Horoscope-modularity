import { horoscopelist } from "./data.js";
import { validMonths } from "./data.js";

export function getHoroscope(dayInput, monthInput) {
  let day = dayInput;
  let month = monthInput.toLowerCase();
  let horoscope = "";

  if (isNaN(day) || day < 1 || day > 31) {
    return "Invalid day. Please enter a day between 1 and 31.";
  }

  if (!validMonths.includes(month)) {
    return "Invalid month. Please enter a valid month.";
  }

  for (const item of horoscopelist) {
    if (
      (month === item.start.month && day >= item.start.day) ||
      (month === item.end.month && day <= item.end.day)
    ) {
      horoscope = item.name;
      break;
    }
  }

  return horoscope ? `Horoscope: ${horoscope}` : "Horoscope not found.";
}
