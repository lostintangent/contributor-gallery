import React from "react";

const EMOJIS: Record<string, string> = {
  camera: "📷",
  hat: "🎩",
  rocket: "🚀",
  shirt: "👕",
};

interface EmojiProps {
  type: string;
}

/**
 * Component for rendering accessible emojis.
 *
 * @param {object} Object with string value `type`, which is the name of the emoji to display.
 */
export default function Emoji({ type }: EmojiProps) {
  return <span role="img" aria-label={type}>{EMOJIS[type]}</span>;
}
