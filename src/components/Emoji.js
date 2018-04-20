import React from "react";

const EMOJIS = {
    "camera": "📷",
    "rocket": "🚀"
}

export default ({ type }) => {
    return <span role="img" aria-label={type}>{EMOJIS[type]}</span>;
}