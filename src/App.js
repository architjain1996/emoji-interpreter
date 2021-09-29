import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😚": "kissing face with eyes closed",
  "😉": "winking face",
  "😁": "grinning face with smiling eyes",
  "💕": "two hearts",
  "🙏": "folded hands"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  return (
    <div className="App">
      <h1
        style={{
          padding: "2rem",
          backgroundColor: "#FFD200",
          textAlign: "center",
          color: "yellow",
          borderTopLeftRadius: "2rem",
          borderBottomRightRadius: "2rem"
        }}
      >
        Emoji Interpreter
      </h1>
      <input onChange={changeHandler} style={{ padding: "1.2em" }} />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <div> {meaning} </div>
      <br />
      <br />
      {emojis.map((emoji) => (
        <span style={{ fontSize: "2rem" }}> {emoji} </span>
      ))}
    </div>
  );
}
