import { tone } from "../index.js";
import { adjustColor } from "./miscFunctions.js";
import { changed_Hex_col, original_Hex_col } from "./divSelectors.js";

let darkenBtn = document.querySelector(".darkenBtn");
let lightenBtn = document.querySelector(".lightenBtn");

let runBtn = document.querySelector(".run");

runBtn.addEventListener("click", () => {
  let col = document.querySelector("#user_Color");
  let percentage = document.querySelector("#user_Percentage");

  if (tone == "light") {
    original_Hex_col.textContent = col.value;
    changed_Hex_col.textContent = adjustColor(
      col.value,
      parseInt(percentage.value)
    );
  } else {
    original_Hex_col.textContent = col.value;

    changed_Hex_col.textContent = adjustColor(
      col.value,
      parseInt(percentage.value) * -1
    );
  }
});

[darkenBtn, lightenBtn].forEach((t) => {
  t.addEventListener("click", () => {
    tone = t.classList.value == "lightenBtn" ? "light" : "dark";

    if (t.classList.value == "lightenBtn") {
      lightenBtn.style.border = "4px dotted pink";
      darkenBtn.style.borderWidth = "0px";
    } else {
      darkenBtn.style.border = "4px dotted pink";
      lightenBtn.style.borderWidth = "0px";
    }
  });
});
