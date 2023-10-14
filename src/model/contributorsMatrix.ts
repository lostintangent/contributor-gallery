import signatures, { Contributor } from "./contributors";

const COLUMNS = 30;
const ROWS = 20;

export interface MatrixCell {
  isActive?: boolean;
  contributor: Contributor | null;
}

const matrix: MatrixCell[] = [];
for (let x = 0; x < COLUMNS; x++) {
  for (let y = 0; y < ROWS; y++) {
    // const cellNumber = y + x * ROWS + 1;

    const contributor = signatures.shift() || null;
    matrix.push({ contributor });
  }
}

export default matrix;
