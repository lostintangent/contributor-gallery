import signatures from "./signatures";

const COLUMNS = 30;
const ROWS = 20;

const grid = [];
for (let x = 0; x < COLUMNS; x++) {
  for (let y = 0; y < ROWS; y++) {
    grid.push({ signature: signatures.shift(), key: x + y + 1 });
  }
}

export default grid;