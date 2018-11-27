import React from "react";

const EMOJIS = {
    "camera": "📷",
    "hat": "🎩",
    "rocket": "🚀",
    "shirt": "👕"
}

/**
 * Component for rendering accessible emojis.
 * 
 * @param {string} type The name of the emoji to display.
 */
export default function Emoji({ type }) {
    return <span role="img" aria-label={type}>{EMOJIS[type]}</span>;
}