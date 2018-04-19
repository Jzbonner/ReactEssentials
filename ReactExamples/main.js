function FriendsList (props) {
  return (
    <ul>
      {props.list.map(name => (
        <li key={name}> 
          <span> {name} </span>
          <button onClick={() => props.onRemoveFriend(name)}> Remove </button>
        </li>
      ))};
    </ul>
  )
};

// Class component can specify what the UI will be by utilizing a render method 
class App extends React.Component {
    constructor(props) {
        super(props) 

        // instances that are living in the state of the main React Component   
        this.state = {
            friends: ['Eric', 'Antron', 'Jose']
        };
    };

    handleAddFriend() {

    };

    handleRemoveFriend(name) {
      this.setState((currentState) => {
        return {
          friends: currentState.friends.filter((friend) => friend != name)
        };
      })
    };

  render() {
    return (
      <div>
        <FriendsList 
          list={this.state.friends}
          onRemoveFriend = {this.handleRemoveFriend}
        />
      </div> 
    )
  };
};


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