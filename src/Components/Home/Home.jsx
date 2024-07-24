import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader/Loader';
import './Home.css';

const blogsApiUrl = 'https://apis.ccbp.in/blogs';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(blogsApiUrl)
      .then(response => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {loading ? (
        <Loader />
      ) : (
        <ul className="blogs-list">
          {blogs.map(blog => (
            <li key={blog.id} className="blog-item">
              <Link to={`/blogs/${blog.id}`}>
                <img src={blog.image_url} alt={blog.title} className="blog-image" />
                <div className="blog-info">
                  <h2 className="blog-title">{blog.title}</h2>
                  <p className="blog-author">{blog.author}</p>
                  <p className="blog-topic">{blog.topic}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
