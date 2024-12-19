import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuote = async () => {
    try {
      setIsLoading(true);
      let res = await fetch('https://official-joke-api.appspot.com/random_joke');
      let data = await res.json();
      setQuote(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start py-16 h-screen bg-gray-950">
      <h1 className="text-4xl text-center font-bold mb-4 text-teal-500">Random Quote Generator</h1>
      <p className="text-lg text-center mb-4 text-teal-300">
        {isLoading ? 'Loading...' : quote}
      </p>
      <button 
        className="px-4 py-2 bg-teal-500 border-2 border-white text-white font-semibold rounded hover:bg-teal-700"
        onClick={fetchQuote} // Fetch a new quote on button click
      >
        Generate Quote
      </button>
    </div>
  );
}

export default Quote;
