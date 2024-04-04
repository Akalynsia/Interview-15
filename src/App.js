import React, { useState, useEffect } from "react";

function App() {
  return <WordByWord />;
}

const WordByWord = () => {
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setWords(text.split(" "));
  }, [text]);

  useEffect(() => {
    let newText = displayedText;
    const interval = setInterval(() => {
      if (words.length > 0) {
        newText += " " + words[0];
        setDisplayedText(newText);
        setWords((prevWords) => prevWords.slice(1));
      }
    }, 500);

    return () => clearInterval(interval);
  }, [words, displayedText]);

  const handleInputChange = (event) => {
    setText(event.target.value);
    setWords([]);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
        placeholder="Type your text here..."
      />
      <div className="text-center">{displayedText}</div>
    </div>
  );
};

export default App;
