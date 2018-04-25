import { signatures } from "./signatures";

const COLUMNS = 30;
const ROWS = 20;

const matrix = [];
for (let x = 0; x < COLUMNS; x++) {
  for (let y = 0; y < ROWS; y++) {
    const signature = signatures.shift();
    matrix.push({ signature })
  }
}

export default matrix;