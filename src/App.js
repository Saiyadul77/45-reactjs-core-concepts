import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Counter></Counter>
      <Comments></Comments>
    </div>
  );
}
function Comments() {
  const [comments, setComments] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])
  return (
    <div>
      <h1>Comments: {comments.length}</h1>
      {
        comments.map(comment => <Comment name={comment.name} body={comment.body}></Comment>)
      }
    </div>
  )
}
function Comment(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>{props.body}</p>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0)
  const HandleIncrease = () => setCount(count + 1)
  const HandleDecrease = () => setCount(count - 1)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={HandleIncrease}>Increase</button>
      <button onClick={HandleDecrease}>Decrease</button>
    </div>
  )
}

export default App;
