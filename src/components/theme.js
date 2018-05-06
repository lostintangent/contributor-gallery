import { injectGlobal } from "styled-components";

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    padding: 20px;
  }
`;

export default {
    bonusColor: "#666",
    borderStyle: "0.5px solid #666",
    cellSize: "30px",
    primaryColor: "#9082CD",
    secondaryColor: "#666",
    specialColor: "gold"
};