javascript
const grid = document.getElementByid("grid");
for(let i = 0; i < 400; i++) {
  const cell = document.createElement("div");
  cell.classlistt.add("cell");
  cell.addEventListener(click", () => {
    cell.style.backgroundColor = cell.style.backgroundColor === "black" ? "white" : "black";
  });
  grid.appendChild(cell);
}
