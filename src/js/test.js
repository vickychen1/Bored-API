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

      function na() {
        if (data.type === undefined) {
          alert("Try another value");
        } else {
          activity.textContent = data.activity;
        }
      }
      na();
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }
  };
  query();
}
