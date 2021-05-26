//import { DOMSelectors } from "./DOM";
//import { activities } from "./activity";

//const key = "YOURKEYHERE";

const key = "5808228";

var data;
//code goes here
/*
const query = async function () {
  try {
    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    console.log(data);
    activity.textContent = data.activity;
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
};
query();
*/
/*
const activity = document.getElementById("activity");
const participants = document.getElementById("participants");
const price = document.getElementById("price");
const accessibility = document.getElementById("accessibility");
*/
/*
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
*/
function getOption() {
  option = type.options[type.selectedIndex].value;
  console.log(option);
}

submit.addEventListener("click", result);
function result() {
  participantsInput = participants.value;
  priceInput = price.value;
  accessibilityInput = accessibility.value;

  console.log(participantsInput);
  console.log(priceInput);
  console.log(accessibilityInput);
  //type.addEventListener("click", getOption);
  getOption();

  const query = async function () {
    try {
      const response = await fetch(`http://www.boredapi.com/api/activity/`);
      data = await response.json();
      console.log(data);
      console.log(data.type);
      //activity.textContent = data.activity;
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };
  query();

  function checkInput() {
    if (data.type === option) {
      if (data.participants === participantsInput) {
        if (data.price === priceInput) {
          if (data.accessibility === accessibilityInput) {
            activity.textContent = data.activity;
          }
        }
      }
    } else if (data.type !== option) {
      if (data.participants !== participantsInput) {
        if (data.price !== priceInput) {
          if (data.accessibility !== accessibilityInput) {
            query();
          }
        }
      }
    } else {
      alert("Not found. Try again.");
    }
  }
  checkInput();
  /*
  function checkInput() {
    if (data.type === option) {
      activity.textContent = data.activity;
    } else {
      query();
    }
  }
  checkInput();
*/
}
