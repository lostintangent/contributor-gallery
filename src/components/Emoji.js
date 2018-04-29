import React from "react";

const EMOJIS = {
    "camera": "📷",
    "rocket": "🚀"
}

export default function Emoji({ type }) {
    return <span role="img" aria-label={type}>{EMOJIS[type]}</span>;
}