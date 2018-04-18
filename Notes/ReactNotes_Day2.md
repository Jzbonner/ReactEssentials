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
