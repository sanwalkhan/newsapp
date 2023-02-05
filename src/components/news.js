import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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

  capitalizefirsstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `News-World ${this.capitalizefirsstletter(
      this.props.category
    )}`;
  }

  async updateNews() {
    let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d8ab0b9c2f934b7b904f5e040ee795ff&&page=${this.state.page}&pageSize=${this.props.pageSize}`;
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

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

   fetchMoreData = async () => {   
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d8ab0b9c2f934b7b904f5e040ee795ff&&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setPage(this.page+1) 
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setArticles(this.articles.concat(parsedData.articles))
    this.setTotalResults(parsedData.totalResults)
  };


  render() {
    return (
      <div className="container m-y3">
        <h2
          className={`text-center text-${
            this.props.mode === "dark" ? "white" : "dark"
          }`}
          style={{ margin: "40px 0px" }}
        >
          News-World {this.capitalizefirsstletter(this.props.category)}{" "}
          Headlines
        </h2>
        <InfiniteScroll
                    dataLength={ this.state.articles.length}
                    next={this.fetchMoreData  }
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                ></InfiniteScroll> 
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <NewsItem
                    newsURL={e.url}
                    title={e ? e.title : "News-World"}
                    description={
                      e
                        ? e.description
                        : "Hello World This is Sanwal Khan. A Beginner MernStack Developer. I'm From Pakistan . Thanks "
                    }
                    imgURL={e.urlToImage}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
                    mode={this.props.mode}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="btn"
            className={`btn btn-sm btn-${
              this.props.mode === "light" ? "dark" : "light"
            }`}
            onClick={this.handlePreviousClick}
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
            onClick={this.handleNextClick}
            className={`btn btn-sm btn-${
              this.props.mode === "light" ? "dark" : "light"
            }`}
          >
            Next : &rarr;
          </button>
        </div>
      </div>
    );
  }
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
