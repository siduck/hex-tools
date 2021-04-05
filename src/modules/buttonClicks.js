import { tone } from "../index.js";
import { adjustColor, createColor_Shades } from "./miscFunctions.js";
import { changed_Hex_col, original_Hex_col } from "./divSelectors.js";

let darkenBtn = document.querySelector(".darkenBtn");
let lightenBtn = document.querySelector(".lightenBtn");

let runBtn = document.querySelector(".run");

runBtn.addEventListener("click", () => {
  let col = document.querySelector("#user_Color");
  let percentage = document.querySelector("#user_Percentage");

  // remove extra spaces from inputs

  let original_Color = col.value.replace(/\s+/g, " ").trim();
  let tempPercentage = percentage.value.replace(/\s+/g, " ").trim();

  let lighterCol = adjustColor(original_Color, parseInt(tempPercentage));
  let darkerCol = adjustColor(original_Color, parseInt(tempPercentage) * -1);

  lighterCol = lighterCol.replace(/\s+/g, " ").trim();
  darkerCol = darkerCol.replace(/\s+/g, " ").trim();

  if (tone == "light") {
    original_Hex_col.textContent = col.value;
    changed_Hex_col.textContent = lighterCol;
    createColor_Shades(original_Color, lighterCol);
  } else {
    original_Hex_col.textContent = col.value;
    changed_Hex_col.textContent = darkerCol;
    createColor_Shades(original_Color, darkerCol);
  }
});

[darkenBtn, lightenBtn].forEach((t) => {
  t.addEventListener("click", () => {
    tone = t.classList.value == "lightenBtn" ? "light" : "dark";

    if (t.classList.value == "lightenBtn") {
      lightenBtn.style.border = "3px solid #ff99c8";
      darkenBtn.style.borderWidth = "0px";
    } else {
      darkenBtn.style.border = "3px solid #ff99c8";
      lightenBtn.style.borderWidth = "0px";
    }
  });
});
