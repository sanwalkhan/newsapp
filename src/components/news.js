import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "pakistan",
    pageSize: 9,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let URL = `https://newsapi.org/v2/top-everything?country=${this.props.country}&category=${this.props.category}&apiKey=d8ab0b9c2f934b7b904f5e040ee795ff&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(URL);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let URL = `https://newsapi.org/v2/top-everything?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=d8ab0b9c2f934b7b904f5e040ee795ff&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize} `;
      this.setState({ loading: true });

      let data = await fetch(URL);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  handlePreviousClick = async () => {
    let URL = `https://newsapi.org/v2/top-everything?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=d8ab0b9c2f934b7b904f5e040ee795ff&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(URL);
    let parsedData = await data.json();
    this.setState({ loading: false });

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  render(props) {
    return (
      <div className="container m-y3">
        <h2
          className={`text-center text-${
            this.props.data === "dark" ? "white" : "dark"
          }`}
          style={{margin:'40px 0px'}}
        >
          News-World everything
        </h2>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <NewsItem
                    newsURL={e.url}
                    title={e ? e.title.slice(0, 60) : "News-World"}
                    description={
                      e
                        ? e.description.slice(0, 90)
                        : "Hello World This is Sanwal Khan. A Beginner MernStack Developer. I'm From Pakistan . Thanks "
                    }
                    imgURL={e.urlToImage}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="btn"
            className="btn btn-dark "
            onClick={this.handlyPreviousClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="btn"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next : &rarr;
          </button>
        </div>
      </div>
    );
  }
}
