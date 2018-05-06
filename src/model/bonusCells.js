const bonusCells = [18, 87, 131, 274, 412, 518];
const specialCells = [4, 337];

export function isBonusCell(cellNumber) {
    return bonusCells.includes(cellNumber);
}

export function isSpecialCell(cellNumber) {
    return specialCells.includes(cellNumber);
}