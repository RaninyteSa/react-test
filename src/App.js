import './App.css';
import {useState, useEffect } from 'react'


const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000')
    .then(resp => resp.json())
    .then(resp => {
      setPosts(resp)
    })
  }, [])

  return (
    <div className="articles">
      {posts && posts.map(article => {
        return (
          <div key={article.id} className='box'>
            <h3>{article.title}</h3>
            <div className='image'>
              <img src={article.image} alt={article.title} />
            </div>
            <div className="content">
              {article.content}
              </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
