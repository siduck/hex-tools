const adjustColor = (color, amount) => {
  return (
    "#" +
    color
      .replace(/^#/, "")
      .replace(/../g, (color) =>
        (
          "0" +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
};

export const createColor_Shades = (ogColor, newColor) => {
  let ogCol_div = document.querySelector(".ogCol");
  let newCol_div = document.querySelector(".newCol");

  ogCol_div.style.backgroundColor = ogColor;
  newCol_div.style.backgroundColor = newColor;
};

export const add_shade = (shadeName) => {
  let col = document.querySelector("#user_Color");

  let original_Color = col.value.replace(/\s+/g, " ").trim();
  let percentage = document.querySelector("#user_Percentage");

  let tempPercentage = percentage.value.replace(/\s+/g, " ").trim();

  let resultColor;

  if (shadeName == "light") {
    resultColor = adjustColor(original_Color, parseInt(tempPercentage));
    resultColor = resultColor.replace(/\s+/g, " ").trim();

    return resultColor;
  }

  resultColor = adjustColor(original_Color, parseInt(tempPercentage) * -1);
  resultColor = resultColor.replace(/\s+/g, " ").trim();

  return resultColor;
};
