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
    const interval = setInterval(() => {
      if (words.length > 0) {
        console.log(words[0]);
        setWords((prevWords) => prevWords.slice(1));
      }
    }, 500);

    return () => clearInterval(interval);
  }, [words]);

  const handleInputChange = (event) => {
    setText(event.target.value);
    setWords([]);
    setDisplayedText("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
        placeholder="Type your text here..."
      />
      <div className="text-center">{displayedText}</div>
    </div>
  );
};

export default App;
