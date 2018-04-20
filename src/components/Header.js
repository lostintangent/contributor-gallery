import Emoji from "./Emoji";
import React from "react";
import TwitterButton from "./TwitterButton";

export default () => {
    return <div style={styles.container}>
        <div>
            <h1>Visual Studio Live Share Guestbook</h1>
            <h2>Be a part of collaborative development history at //Build 2018! <Emoji type="rocket" /></h2>
        </div>
        <TwitterButton hashTag="vsliveshare" />
    </div>;
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "space-between"
    }
};