import React, { Component } from "react";
import NewsItem from "./NewsItem";


export default class News extends Component {

    constructor(){
        super()
        
        this.state = {
            articles : [],
            loading : false
        }
    }


   async componentDidMount(){
        let URL = "https://newsapi.org/v2/everything?q=pakistan&apiKey=d8ab0b9c2f934b7b904f5e040ee795ff";
        let data =await fetch(URL);
        let parsedData =await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles})
    }


  render() {
    return (
      <div className="container m-y3">
        <h2>News-World HeadLines</h2>
       
        <div className="row">
        {this.state.articles.map((e)=>{
            return(
                <div className="col-md-4" key={e.url}>
            <NewsItem newsURL={e.url} title={e ? e.title.slice(0,60): " "} description={ e ? e.description.slice(0,90): " "} imgURL={e.urlToImage} />
          </div>
            )
        })}
          
        </div>
      </div>
    );
  }
}
