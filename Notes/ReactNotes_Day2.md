# Day 2 ~ React Essentials: States and UI 
Adding State to an App component involves creating and comparing variables. It is necessary, when working with list in components, to provide a unique key identifier. React needs a unique key prompt in order to manage the current state and to compare it to future states. 

In the first example the goal of the list is to create a dynamic list that can be updated from the UI (i.e. remove and add items to the list from the interface). Again a component is a function or a class which optionally accepts input and returns a React element. Having State that is managed by a React component requires a class component rather than a functional component. Which can be seen below: 
```javascript 
// Functional component that will be pass functionality to our UI interface
function FriendsList (props) {
  return (
    <ul>
      {props.list.map(name => (
        <li key={name}> 
          {name}
        </li>
      ))};
    </ul>
  )
};

// Class component can specify what the UI will be by utilizing a render method 
class App extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            friends: ['Eric', 'Antron', 'Jose']
        };
    };

  render() {
    return (
      <div>
        <FriendsList list={this.state.friends} />
      </div> 
    )
  };
};
```

React constructors require you to utilize the `super()` method. "Whenever you call Super is going to invoke the constructor function of the class that you're extending"; for our example this means that the `super()` will invoke the constructor of the extends class React.Component. 
* This is an example of both Polymorphism, Data Hiding, and Is-a/Has-a Inheritance in ES6 JS
* Refer to notes on Object Oriented Thought Process for more information on the aforementioned programming concepts 
* State is local to a component, so a component can manage its own state; however props are when you pass data to a component 

Utilizing a class component allows you to utilize a method for each way you will be interacting with your component state. You can do this by using the `setState()` method that is located on the component instance. 

It is necessary to utilize the above method so tha React can compare state changes. If you were to explicitly mutate a specific property of the state without the `setState()` method, then React would not be able to compare states. It doesn't keep a log of the invoked state properties, it simply looks for methods that signal a change in state properties. 
* Methods that are consistently used to modify arrays are `filter()`, `map()` and `reduce()`
* In a more contrived example for handling changes to state properties, you would organize your arrays by utilizing IDs that are linked to corresponding name values. In the React Examples folder for Day 2 we are simplifying the React application process 
* refer to documentation on `.bind(this)` @ https://medium.com/shoutem/react-to-bind-or-not-to-bind-7bf58327e22a

A controlled component is a component that is linked to the state of a component that is controlled by React. Refer to example `main.js` file in the React Examples folder. 