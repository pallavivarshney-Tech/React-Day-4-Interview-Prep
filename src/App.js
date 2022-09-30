import logo from './logo.svg';
import UseRef from './UseRef';
import './App.css'


function App() {
  return (
    <div className="App">
    <h1>Day-4 React-Interview-Questions</h1>
      <h1>Question-1</h1>
      <h2>What is Context api ?</h2>
      <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. (or) Context provides a way to pass data through the component tree without having to pass props down manually at every level.

For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.

</p>
<h1>Question-2</h1>
<h2>Difference between callback and useCallback Hook ?</h2>
<h4>callback</h4>
<p>callback is like an argument passed to an function whereas another one is hook, in this you pass another function as an argument.
<br/>A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished</p>
<h4>Use Call Back</h4>
<p>The useCallback hook is used when you have a component in which the child is rerendering again and again without need. Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
It always returns a memoized function.</p>
<h1>Question-3</h1>
<h4>What is Props Drilling Concept ?What is State Uplifting ?</h4>
<h4>Props Drilling</h4>
<p>It is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around.It is a situation when the same data is passed to every level in a component due to the requirement at the final level.</p>
<h4>State Uplifting</h4>
<p>In react state uplifting means state is being shared by moving it up to the closest common ancestor of the component that need it.
<br/>When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.</p>
<h1>Question-4</h1>
<h2>Difference between useEffect and useContext ?</h2>
<h4>UseEffect</h4>

<p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
<h4>Use Context</h4>
<p>React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

“useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving “props”.
</p>
<UseRef />
    </div>
  );
}

export default App;
