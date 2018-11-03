const bonusCells = [18, 87, 131, 274, 412, 518];
const specialCells = [37, 337];

/**
 * Determine whether a specific matrix cell represents a bonus cell.
 * 
 * @param {number} cellNumber The index of the cell within the signatures matrix to check.
 * @returns {boolean} A boolean indicating whether the specified cell is a bonus cell or not.
 */
export function isBonusCell(cellNumber) {
    return bonusCells.includes(cellNumber);
}

/**
 * Determine whether a specific matrix cell represents a special cell.
 * 
 * @param {number} cellNumber The index of the cell within the signatures matrix to check.
 * @returns {boolean} A boolean indicating whether the specified cell is a special cell or not.
 */
export function isSpecialCell(cellNumber) {
    return specialCells.includes(cellNumber);
}