import React, { useState, useEffect } from "react";

function App() {
  return <WordByWord />;
}

const WordByWord = () => {
  // KODUNUZ BURAYA GELECEK
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    setWords(text.split(" "));
    setCurrentWordIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentWordIndex < words.length) {
      console.log(words[currentWordIndex]);
    }
  }, [currentWordIndex, words]);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleNextWordClick = () => {
    setCurrentWordIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        className="border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
        placeholder="Type your text here..."
      />
      <button
        onClick={handleNextWordClick}
        className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default App;
