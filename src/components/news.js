import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
  const [articles, setarticles] = useState([ ]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 



  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d8ab0b9c2f934b7b904f5e040ee795ff&&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100);
    
    
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News-World`;
    updateNews(); 
    // eslint-disable-next-line
}, [])
 const fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d8ab0b9c2f934b7b904f5e040ee795ff&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
  };

  return (
    <>
      <h2
        className={`text-center text-${
          props.mode === "dark" ? "white" : "dark"
        }`}
        style={{ margin: "40px 0px", marginTop: "90px"  }  }
      >
      News-World - Top {capitalizeFirstLetter(props.category)} Headlines</h2>

      {loading && <Spinner />}

    
      <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={<Spinner/>}
  > 
      <div className="container">
           
      <div className="row">
          {articles.map((e) => {
              return <div className="col-md-4" key={e.url}>
              <NewsItem
              key={e.url}
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
              mode={props.mode}
            />
              </div>
          })}
      </div>
      </div> 
  </InfiniteScroll>
    </>
  );
};

export default News;

News.defaultProps = {
  country: "pakistan",
  pageSize: 9,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
