/**
 * Determine whether a specific matrix cell represents a bonus cell.
 *
 * @param {number} cellNumber The index of the cell within the signatures matrix to check.
 * @returns {boolean} A boolean indicating whether the specified cell is a bonus cell or not.
 */
export function isBonusCell(cellNumber: number): boolean {
  return bonusCells.includes(cellNumber);
}

/**
 * Determine whether a specific matrix cell represents a special cell.
 *
 * @param {number} cellNumber The index of the cell within the signatures matrix to check.
 * @returns {boolean} A boolean indicating whether the specified cell is a special cell or not.
 */
export function isSpecialCell(cellNumber: number): boolean {
  return specialCells.includes(cellNumber);
}

const bonusCells = [18, 87, 131, 274, 412, 518];
const specialCells = [37, 337];
