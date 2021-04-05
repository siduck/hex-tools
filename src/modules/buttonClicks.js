import { tone } from "../index.js";
import {
  adjustColor,
  createColor_Shades,
  create_LighterShade,
  create_DarkerShade,
} from "./miscFunctions.js";
import { changed_Hex_col, original_Hex_col } from "./divSelectors.js";

let darkenBtn = document.querySelector(".darkenBtn");
let lightenBtn = document.querySelector(".lightenBtn");

let runBtn = document.querySelector(".run");

runBtn.addEventListener("click", () => {
  let col = document.querySelector("#user_Color");

  // remove extra spaces from inputs

  let original_Color = col.value.replace(/\s+/g, " ").trim();

  original_Hex_col.textContent = col.value;

  changed_Hex_col = changed_Hex_col(tone == "light")
    ? create_LighterShade()
    : create_DarkerShade();

  tone == "light"
    ? createColor_Shades(original_Color, create_LighterShade())
    : createColor_Shades(original_Color, create_DarkerShade());
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
