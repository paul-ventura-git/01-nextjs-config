import React, { useState, useEffect } from 'react'

export default function CSR() {
  const [posts, setPosts] = useState<
    {
      id: number; 
      title: string;
      body: string;
    }[]
  >([]);

  // El USEEFFECT Solo funciona del lado del cliente
  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data.slice(0, 5)))
  }, []);


  return (
    <div>
      <h1>CSR: Client Side Rendering</h1>
      {
        posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      }
    </div>
  )
}
