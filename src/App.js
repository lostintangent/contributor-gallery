import GuestbookGrid from "./components/GuestbookGrid";
import Header from "./components/Header";
import React from "react";

import signatures from "./model/signatureMatrix";

export default () => {
    return <div className="App">
      <Header />
      <GuestbookGrid signatures={signatures} />
    </div>;
};