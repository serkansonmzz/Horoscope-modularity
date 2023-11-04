import { getHoroscope } from "./functions.js";

let userDay = Number(prompt("Enter the day: "));
let userMonth = prompt("Enter The month: ");

let userHoroscope = getHoroscope(userDay, userMonth);

console.log(userHoroscope);
