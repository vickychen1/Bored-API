import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "YOURKEYHERE";
console.log("hi");

const apiUrl = "http://www.boredapi.com/api/activity/";
async function getApi() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data.activity);
  activity.textContent = data.activty;
}
getApi();

const activity = document.getElementById("activity");
