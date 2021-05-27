import { DOMSelectors } from "./DOM";

var data;
var option;

DOMSelectors.submit.addEventListener("click", result);
function result() {
  const participantsInput = DOMSelectors.participants.value;
  const priceInput = DOMSelectors.price.value;
  const accessibilityInput = DOMSelectors.accessibility.value;

  function getOption() {
    option = DOMSelectors.type.options[type.selectedIndex].value;
  }
  getOption();

  const query = async function () {
    try {
      //adjusts for type: any
      if (option === "any") {
        var response = await fetch(
          `https://www.boredapi.com/api/activity?participants=${participantsInput}&price=${priceInput}&accessibility=${accessibilityInput}`
        );
      } else {
        var response = await fetch(
          `https://www.boredapi.com/api/activity?type=${option}&participants=${participantsInput}&price=${priceInput}&accessibility=${accessibilityInput}`
        );
      }
      data = await response.json();

      //user input is too high, out of range
      function exceedValue() {
        if (priceInput > 1) {
          alert("Price must be from 0 to 1.");
        } else {
          return;
        }
        if (accessibilityInput > 1) {
          alert("Accessiblity must be from 0 to 1.");
        } else {
          return;
        }
      }
      exceedValue();

      //if values inputted is not found in array
      function na() {
        if (data.type === undefined) {
          if (priceInput <= 1) {
            if (accessibilityInput <= 1) {
              alert("Try another value");
            }
          }
        } else {
          activity.textContent = data.activity;
        }
      }
      na();
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }
    console.log(data);
  };
  query();
}
