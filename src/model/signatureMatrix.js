import { isBonusCell, isSpecialCell } from "./bonusCells";
import { signatures } from "./signatures";
import { observable } from "mobx";

const COLUMNS = 30;
const ROWS = 20;

const matrix = [];
for (let x = 0; x < COLUMNS; x++) {
  for (let y = 0; y < ROWS;y++) {
    const cellNumber = y + (x * ROWS) + 1;
    const isBonus = isBonusCell(cellNumber);
    const isSpecial = isSpecialCell(cellNumber);

    const signature = signatures.unshift();
    matrix.push({ isBonus, isSpecial, signature });
  }
}

export default observable(matrix);
