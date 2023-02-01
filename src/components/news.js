import React, { Component } from "react";
import NewsItem from "./NewsItem";


export default class News extends Component {
    articles =  [
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": "BBC News",
          "title": "MrBeast: Why has YouTuber faced criticism for blind surgery video?",
          "description": "The world's most popular YouTuber has responded to criticism over him funding life-changing operations.",
          "url": "http://www.bbc.co.uk/news/newsbeat-64490431",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8A46/production/_128489353_gettyimages-1420812437.jpg",
          "publishedAt": "2023-02-01T18:22:23.9080487Z",
          "content": "The world's most popular YouTuber has responded to criticism following a video of him funding multiple life-changing operations.\r\nIn the post, MrBeast reveals that he sorted sight-restoring cataract … [+3819 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": "BBC News",
          "title": "Beyoncé announces Renaissance world tour, as fans brace for ticket rush",
          "description": "Demand for tickets is expected to be high to see the star take her Renaissance album on the road.",
          "url": "http://www.bbc.co.uk/news/entertainment-arts-64488389",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D0FA/production/_128489435_hi019966478.jpg",
          "publishedAt": "2023-02-01T18:22:20.1433606Z",
          "content": "Beyoncé has announced a 43-date world tour in support of her critically-acclaimed Renaissance album, including five nights in the UK.\r\nThe shows will kick off in Sweden on 10 May, before landing at C… [+2623 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": "BBC News",
          "title": "Colorado River: US states fail to reach deal on cutting water use",
          "description": "More than 40 million people in seven Western states rely on the drought-stricken Colorado River.",
          "url": "http://www.bbc.co.uk/news/world-us-canada-64485091",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10854/production/_128486676_gettyimages-1436811838.jpg",
          "publishedAt": "2023-02-01T18:07:17.8926218Z",
          "content": "Seven US Western states that rely on the drought-stricken Colorado River have failed to reach an agreement on cutting water consumption.\r\nCalifornia, the largest user, did not join a water cut propos… [+2409 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": "BBC News",
          "title": "Ice storm leaves thousands without power in Texas",
          "description": "More than 2,150 flights have been cancelled, with Dallas and Austin airports being the most impacted.",
          "url": "http://www.bbc.co.uk/news/world-us-canada-64485092",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16056/production/_128489109_f20311f5cdbed95ff96d937583581225905ed8ff0_0_5535_36901000x667.jpg",
          "publishedAt": "2023-02-01T17:52:19.3773353Z",
          "content": "Media caption, Forecaster Nick Miller looks at the current ice storm and the arctic blast heading to the US\r\nA deadly ice storm pummelling parts of the southern US this week has disrupted travel and … [+2969 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": "BBC News",
          "title": "Tyre Nichols funeral: Kamala Harris joins service in Memphis",
          "description": "The US vice-president joins the service for Tyre Nichols, who died after being beaten by Memphis police.",
          "url": "http://www.bbc.co.uk/news/live/world-us-canada-64472836",
          "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
          "publishedAt": "2023-02-01T17:22:27.0837253Z",
          "content": "Last night the family of Tyre Nichols appeared at an event in the Mason Temple Church in\r\nMemphis.\r\nHis\r\nbrother, Jamal Dupree, described how much he will miss Tyre. Nichols\r\nstepfather Rodney Wells … [+1294 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": "BBC News",
          "title": "Man rescued seconds before car engulfed in flames",
          "description": "Police and a bystander pull an unconscious man from a crashed car moments before it catches fire.",
          "url": "http://www.bbc.co.uk/news/world-us-canada-64490278",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/82E5/production/_128490533_p0f0b5m5.jpg",
          "publishedAt": "2023-02-01T16:07:19.2991418Z",
          "content": "Man rescued seconds before car engulfed in flames. Video, 00:01:20Man rescued seconds before car engulfed in flames"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": "BBC News",
          "title": "FBI search President Biden's home in Delaware",
          "description": "FBI search President Biden's home in Delaware as part of investigation into classified documents, his lawyer says",
          "url": "http://www.bbc.co.uk/news/world-us-canada-64488011",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
          "publishedAt": "2023-02-01T15:07:21.1582755Z",
          "content": "The FBI is searching President Joe Biden's home in Delaware as part of investigation into classified documents, his lawyer says. \r\nIn a statement, Mr Biden's attorney said the search was \"planned\" wi… [+472 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": "BBC Sport",
          "title": "NFL great Brady retires 'for good'",
          "description": "Legendary quarterback Tom Brady says he is retiring \"for good\" after 23 seasons in the NFL.",
          "url": "http://www.bbc.co.uk/sport/american-football/64487463",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg",
          "publishedAt": "2023-02-01T13:37:32.8294781Z",
          "content": "Legendary quarterback Tom Brady says he is retiring \"for good\" after 23 seasons in the NFL.\r\nBrady, 45, first announced his retirement on this day last year but reversed his decision six weeks later,… [+846 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": "BBC News",
          "title": "Russia in Africa: How disinformation operations target the continent",
          "description": "The man behind a new pro-Kremlin social media network tells the BBC he wants Africa to embrace Russia.",
          "url": "http://www.bbc.co.uk/news/world-africa-64451376",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/18051/production/_128458389_gettyimages-1238621753-1.jpg",
          "publishedAt": "2023-02-01T13:37:19.7839513Z",
          "content": "A large social network that promotes anti-Western and pro-Kremlin ideas is helping Russia expand its influence at the expense of France in some of its former colonies in Africa.\r\nCalled Russosphère (… [+5824 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": "BBC News",
          "title": "Why do so many police traffic stops turn deadly?",
          "description": "Since 2017, hundreds of people have been killed after being pulled over by police in the US.",
          "url": "http://www.bbc.co.uk/news/world-us-canada-64458041",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9C1E/production/_128466993_gettyimages-1240732534.jpg",
          "publishedAt": "2023-02-01T10:22:25.2670697Z",
          "content": "Tyre Nichols is one of dozens of drivers to have died in recent years after being pulled over by police. Why do traffic stops become violent and what can be done about it?\r\nThe death of Mr Nichols in… [+6234 chars]"
        }
      ]
    constructor(){
        super()
        
        this.state = {
            articles : this.articles,
            loading : false
        }
    }
  render() {
    return (
      <div className="container m-y3">
        <h2>News-World HeadLines</h2>
       
        <div className="row">
        {this.state.articles.map((e)=>{
            return(
                <div className="col-md-4" key={e.url}>
            <NewsItem newsURL={e.url} title={e.title.slice(0,60)} description={e.description.slice(0,90)} imgURL={e.urlToImage} />
          </div>
            )
        })}
          
        </div>
      </div>
    );
  }
}
