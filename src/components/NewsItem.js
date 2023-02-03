import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
    let  { title , description , imgURL , newsURL , author , date , source} = this.props
        return (
            <div className='my-3'>
                <div className="card" >

                <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left : '90%' , zIndex : '1'}}> {source} </span>

                    <img src={!imgURL?"https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=127" : imgURL} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title">{title}...</h6>
                            <p className="card-text">{description}...</p> 
                            <p className='card-text'><small className='text-danger'> By {author?author :"Unknown" } on {new Date(date).toGMTString()} </small></p>
                            <a href={!newsURL?"https://www.bbc.com/news ": newsURL} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem