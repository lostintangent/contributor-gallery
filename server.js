const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join("public", "index.html"));
});

app.get("/signatures", function (req, res) {
  const signatures = require("./src/model/signatures");

  markBonusSignatures(signatures);
  markSpecialSignatures(signatures);

  res.json(signatures);
});

app.listen(PORT, () => {
  console.log("Server listening on http://localhost:%o", PORT);
});

function markBonusSignatures(signatures) {
  const { isBonusCell } = require("./src/model/bonusCells");

  signatures.forEach((signature, index) => {
    if (signature.message && isBonusCell(index)) {
      signature.isBonus = true;
    }
  });

  return signatures;
}

function markSpecialSignatures(signatures) {
  const { isSpecialCell } = require("./src/model/bonusCells");

  signatures.forEach((signature, index) => {
    if (signature.message && isSpecialCell(index)) {
      signature.isSpecial = true;
    }
  });

  return signatures;
}
