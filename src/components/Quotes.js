import React, { useEffect, useState } from 'react';

function Quotes() {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    // re-rendering the component everytime when QUOTE generate
    useEffect(() => {
        // calling getQuote() for fetch QUOTE
        getQuote();
    }, [])

    function getQuote() {
        let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

        fetch(url)
            .then(response => response.json())

            .then(data => {
                // created Quotes ARRAY variable
                let dataQuotes = data.quotes;

                // selecting random number on the basis of length of the array
                let randomNumber = Math.floor(Math.random() * dataQuotes.length);

                // creating varaibale to fetch quote and storing it
                let randomQuotes = dataQuotes[randomNumber]

                // accessing QUOTE from array
                setQuote(randomQuotes.quote);
                // accessing AUTHOR NAME from array
                setAuthor(randomQuotes.author);
            })
            .catch(error => document.write("Invalid Link..."));
    }

    function nextQuote() {
        getQuote();
    }

    return (

        <div id="quote-box">
            <div id="wrapper">
                <div id="text">
                    <p>{quote}</p>
                </div>
                <div id="author">- {author}</div>
            </div>
            <button id="new_quote" onClick={nextQuote}>New Quote</button>
        </div>

    );
}

export default Quotes;