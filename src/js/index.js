//import { DOMSelectors } from "./DOM";
//import { activities } from "./activity";

//const key = "YOURKEYHERE";

const key = "5808228";

//code goes here
const query = async function () {
  try {
    const response = await fetch(
      `https://www.boredapi.com/api/activity?type=recreational`
    );
    const data = await response.json();
    console.log(data);
    activity.textContent = data.activity;
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
};
query();

const activity = document.getElementById("activity");
