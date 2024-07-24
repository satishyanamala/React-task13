import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader/Loader';
import './BlogerDetails.css';

const blogItemDetailsApiUrl = 'https://apis.ccbp.in/blogs';

function BlogItemDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${blogItemDetailsApiUrl}/${id}`)
      .then(response => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blog details:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="blog-item-details">
      {loading ? (
        <Loader />
      ) : (
        blog && (
          <div className="blog-content">
            <img src={blog.image_url} alt={blog.title} className="blog-image" />
            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-author-info">
              <img src={blog.avatar_url} alt={blog.author} className="blog-author-avatar" />
              <p className="blog-author">{blog.author}</p>
            </div>
            <p className="blog-topic">{blog.topic}</p>
            <p className="blog-content-text">{blog.content}</p>
          </div>
        )
      )}
    </div>
  );
}

export default BlogItemDetails;
