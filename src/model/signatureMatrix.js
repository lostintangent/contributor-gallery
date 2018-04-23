import signatures from "./signatures";

const COLUMNS = 30;
const ROWS = 20;

const matrix = [];
for (let x = 0; x < COLUMNS; x++) {
  for (let y = 0; y < ROWS; y++) {
    matrix.push({ signature: signatures.unshift(), key: x + y + 1 });
  }
}

export default matrix;