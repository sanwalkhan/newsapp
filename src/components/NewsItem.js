import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
    let  { title , description , imgURL , newsURL} = this.props
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgURL} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title">{title}...</h6>
                            <p className="card-text">{description}...</p>
                            <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem