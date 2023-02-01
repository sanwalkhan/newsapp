import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div>
      <p>News Component
      </p>
      <NewsItem title="title" description="description" />
      <NewsItem title="title" description="description" />
      <NewsItem title="title" description="description" />
      <NewsItem title="title" description="description" />
      <NewsItem title="title" description="description" />
      <NewsItem title="title" description="description" />
      <NewsItem title="title" description="description" />
      </div>
    )
  }
}
