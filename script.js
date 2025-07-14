const grid = document.getElementById("grid");

for (let i = 0; i < 400; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  cell.addEventListener("click", () => {
    cell.style.backgroundColor = cell.style.backgroundColor === "black" ? "white" : "black";
  });

  grid.appendChild(cell);
}
