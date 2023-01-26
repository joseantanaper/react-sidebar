import React, { useState, useEffect } from "react";
import '../../style/QuoteGenerator.scss';

const url = "https://api.quotable.io/random";

export async function loader({ request, params }) {
  console.log("loader");

  // How to preload data in loader, instead of doing it in the component?

  return null;

}

class Quote_Generator extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      quotes: {
        content: "",
        author: ""
      }
    };

  }

  componentDidMount() {
    console.log("componentDidMount");
    this.getQuote();
  }

  getQuote() {

    console.log("getQuote");

    this.setState({ loading: true }, () => {
      fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ loading: false, quotes: data }) )       
    });

  }

  render() {

    const contentStyle = {
      fontSize: "24px",
      fontStyle: "italic",
      textJustify: "justify",
      height: "160px"
    };
    const authorStyle = {
      fontSize: "18px",
      fontWeight: 100,
      float: "right"
    };

    return (
      <>
        
        <h1>Quotes Generator</h1>

        <div className="row">
          <div className="col">
            <div className="quote-generator-card">
              {this.state.loading &&
                <div className="d-flex justify-content-center">
                  <div className="spinner-border text-primary d-flex justify-content-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              }
              <p style={contentStyle}>
                {!this.state.loading && this.state.quotes ? this.state.quotes.content : ""}
              </p>
              <p style={authorStyle}>{!this.state.loading && this.state.quotes ? this.state.quotes.author : ""}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="btn btn-primary float-end" disabled={this.state.loading} onClick={(e) => this.getQuote()}>New Quote</button>
          </div>
        </div>

      </>
    );

  }

}

export default Quote_Generator;

/*
export default function Quote_Generator() {



  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState([]);

  // Fetch Quotes from API

  /**
   * <React.StrictMode> causes fetch calling twice.
   *  Is your App wrapped with React.StrictMode?
   *  If so, it's okay that your component rendered twice.
   *  React rendering your component twice in dev mode to help.
   */

  /*
  const getQuote = () => {
    fetch(url)
      .then((response) =>  response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  


  return (
    <>
      <h1>Quotes Generator</h1>
      {quotes.content}
      {quotes.author}
    </>
  );
}
*/