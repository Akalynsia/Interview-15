import React, { useState, useEffect } from "react";

function App() {
  return <WordByWord />;
}

const WordByWord = () => {
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);
  const [displayedText, setDisplayedText] = useState("");
  const [isIntervalRunning, setIsIntervalRunning] = useState(false);

  useEffect(() => {
    if (
      !isIntervalRunning &&
      text.trim() !== "" &&
      text.trim().slice(-1) !== " "
    ) {
      setWords(text.trim().split(" "));
      setIsIntervalRunning(true);
    }
  }, [text, isIntervalRunning]);

  useEffect(() => {
    if (isIntervalRunning) {
      let newText = displayedText;
      const interval = setInterval(() => {
        if (words.length > 0) {
          newText += " " + words[0];
          setDisplayedText(newText);
          setWords((prevWords) => prevWords.slice(1));
        } else {
          clearInterval(interval);
          setIsIntervalRunning(false);
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [words, displayedText, isIntervalRunning]);

  const handleInputChange = (event) => {
    setText(event.target.value);
    setWords([]);
    setDisplayedText("");
    setIsIntervalRunning(false);
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
