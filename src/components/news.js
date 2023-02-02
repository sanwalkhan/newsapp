import React, { Component } from "react";
import NewsItem from "./NewsItem";


export default class News extends Component {

    constructor(){
        super()
        
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
    }


   async componentDidMount(){
        let URL = "https://newsapi.org/v2/everything?q=pakistan&apiKey=d8ab0b9c2f934b7b904f5e040ee795ff&page=1&pageSize=20";
        let data =await fetch(URL);
        let parsedData =await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
        
    }


    handleNextClick=async ()=>{
       if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

       }
       else{
        let URL = `https://newsapi.org/v2/everything?q=pakistan&apiKey=d8ab0b9c2f934b7b904f5e040ee795ff&page=${this.state.page+1}&pageSize=20 `;
        let data =await fetch(URL);
        let parsedData =await data.json()
        console.log(parsedData)
        this.setState({
            page:this.state.page+1,
            articles: parsedData.articles
        })
    }
}

    handlePreviousClick=async ()=>{
        let URL = `https://newsapi.org/v2/everything?q=pakistan&apiKey=d8ab0b9c2f934b7b904f5e040ee795ff&page=${this.state.page-1}&pageSize=20`;
        let data =await fetch(URL);
        let parsedData =await data.json()
        console.log(parsedData)
        this.setState({
            page:this.state.page-1,
            articles: parsedData.articles
        })

    }


  render() {
    return (
      <div className="container m-y3">
        <h2 className="" >News-World HeadLines</h2>
       
        <div className="row">
        {this.state.articles.map((e)=>{
            return(
                <div className="col-md-4" key={e.url}>
            <NewsItem newsURL={e.url} title={e ? e.title.slice(0,60): "News-World"} description={ e ? e.description.slice(0,90): "Hello World This is Sanwal Khan. A Beginner MernStack Developer. I'm From Pakistan . Thanks "} imgURL={e.urlToImage} />
          </div>
            )
        })}
          
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="btn" className="btn btn-dark " onClick={this.handlyPreviousClick}> &larr;  Previous</button>
        <button type="btn" className="btn btn-dark" onClick={this.handleNextClick}>Next : &rarr;</button>
 
        </div>
      </div>
    );
  }
}
