import React, {useState} from 'react';
import Tweet from './Tweet'

function App() {

  // First you need to import the useState
  // Now we have to use the brackets
  // In those brackets you first put the name of the state, and then the name of the
  // thing that could change it
  // # You set this all equal to useState and set it to whatever you want in the parameters

  // keep in mind that the second thing in the bracket is a function that can do what you want

  // State Ex.
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  // Real world state Ex.

  const [users, setUsers] = useState([
    { name: 'Tony', message: "Hello there", likes: 10},
    { name: 'Lauren', message: "I am the best", likes: 1234},
    { name: 'Sebas', message: "I was your friend", likes: 62346253215}
  ])

  const increment = () => {
    setCount(count + 1);
    setRed(true);
  };


  return (
    <div className="app">
    {/* This is a Ternary Operator, it is saying "If isRed is true, then the className is red. Else the class 
        name is nothing vvvvvvvvvvvvvvv" */}
    <h1 className={isRed ? 'red' : ""}>Change my color!</h1>
      <button onClick = {increment}>Increment</button>
      <h1>{count}</h1>

      {/*Tweets*/}

      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}


    </div>
  );
}

export default App;
