function FriendsList (props) {
  return (
    <ul>
      {props.list.map(name => (
        <li key={name}> 
          <span> {name} </span>
          <button onClick={() => props.onRemoveFriend(name)}> Remove </button>
        </li>
      ))}
    </ul>
  )
};

// Class component can specify what the UI will be by utilizing a render method 
class App extends React.Component {
  constructor(props) {
      super(props) 

      // instances that are living in the state of the main React Component   
      this.state = {
          friends: ['Eric', 'Antron', 'Jose'],
          input: '',
      }

      // need to add a property to your constructor class that binds the 'this' keyword to the super class component instance 
      this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
      this.updateInput = this.updateInput.bind(this)
      this.handleAddFriend = this.handleAddFriend.bind(this)
  }

  handleAddFriend(name) {
    this.setState((currentState) => {
      return {
        friends: currentState.friends.concat([this.state.input]),
        input: ''
      }
    })
  }

  handleRemoveFriend(name) {
    this.setState((currentState) => {
      return {
        friends: currentState.friends.filter((friend) => friend != name)
      }
    })
  }

  updateInput(e) {
    const value = e.target.value

    this.setState(() => ({
      input: value
    }))
  }

  render() {
    return (
      <div>
        <input
          type ='text'
          placeholder = 'new friend'
          value = {this.state.input} //controlled component
          onChange = {this.updateInput}
        />
        <button onClick = {this.handleAddFriend}>Submit</button>
        <FriendsList 
          list={this.state.friends}
          onRemoveFriend = {this.handleRemoveFriend}
        />
      </div> 
    )
  }
};

ReactDOM.render(
  <App />,  
  document.getElementById('app')
)

/* Functional component example of the above

function App () { 
  const friends = ['Eric', 'Antron', 'Jose'];

  return (
    <div>
      <FriendsList list={friends} />
    </div> 
  );
};

ReactDOM.render(
  <App />,  document.getElementById('app')
)

*/