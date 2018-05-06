const bonusCells = [18, 131, 274, 412, 518];

export const isBonusCell = (cellNumber) => {
    return bonusCells.includes(cellNumber);
};