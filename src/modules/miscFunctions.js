export const adjustColor = (color, amount) => {
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
