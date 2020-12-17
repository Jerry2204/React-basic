import React from 'react'
import './css/Blog.css';

const Blog = (props) => {
    return (
        <div className="blog-wrap">
            <img src="https://placeimg.com/250/250/tech" alt=""/>
            <p>{props.tanggal}</p>
            <p><b>{props.judul}</b></p>
            <p>{props.summary}</p>
        </div>
    );
}

export default Blog;