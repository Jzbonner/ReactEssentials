# Day 3 ~ React Essentials: Objects in React and Fetching External Data
Objects in JavaScript are typically utilized in React Components in React to index stores of information that are defined in key value pairs. They can be referenced specifically in component elements or in the React State of the UI. 

Components can have a life cycle. Components have specific life cycle methods that allow you to manage the state and updated states during implementation of your web application. These include: 
* `Constructor` which allows you to establish the initial state of your component 
* `ComponentDidUpdate()`, `ComponentDidMount()`, `console.log('--render--')`, can allow developers to monitor the state of the application 
* `ComponentWillUnmount()` is used explicitly for monitoring the fetching of external data 
* Additionally there also is `static getDerivedStateFromProps()` which in some use cases will allow you to get the props from the parent component and set those props on the local state of your component 

Typically when fetching external data you want to make your API request by using the `componentDidMount()` method. It helps to streamline asynchronous rendering. This syntax/implementation is similar to putting JSX in your render component. All of it is to keep elements separated appropriately and easily comparable for your State and UI. 

You want to use a Class Component when dealing with local state. If you have state inside of your component than you need to use a Class. Basically if you have a life cycle event on the component then you need to use a class as opposed to a state less functional component. 

The use of the ternary operator in React is essentially Conditional Rendering. You can find additional information about React and conditional rendering from the [docs](https://reactjs.org/docs/conditional-rendering.html), however for a more in depth look at conditional rendering in React with ternary and logical AND operators please refer to this writeup on [@Medium](https://medium.freecodecamp.org/conditional-rendering-in-react-using-ternaries-and-logical-and-7807f53b6935)  

> In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application. You can imagine the ternary operator which will - sort of - implicitly return a value based on a condition

For full functionality of a Friends Tracker Web Application with input functionality and a Loading screen please refer to the project files for Day 3 located in the `/PreviousExampleFiles`. 