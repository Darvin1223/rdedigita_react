import React,{ useState, useEffect } from 'react';

const Test = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      // Realiza la solicitud GET a la API utilizando fetch
      fetch('https://apiTest.rdedigital.com/posts')
        .then(response => response.json())
        .then(data => {
          setPosts(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []);

    console.log(posts)
    return (
        <div>
        <h1>Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.post_id}>
              <h2>{post.post_title}</h2>
              <p>{post.post_content}</p>
              <p>Author: {post.author_name}</p>
              <img src={post.post_image} alt={post.post_title} />
              <p>Categories: {post.categories}</p>
            </li>
          ))}
        </ul>
      </div>
    );
};

export {Test};