function FriendsList (props) {
    return (
      <div>
        <h2> Active Friends </h2>
        <ul>
          {props.list.map((name) => (
            <li key={name}> 
              <span> {name} </span>
              <button onClick={() => props.onRemoveFriend(name)}> Remove </button>
              <button onClick={() => props.onDeactivateFriend(name)}> Deactivate </button>
            </li>
          ))}
        </ul>
        <h2> Inactive Friends </h2>
        <ul>
          {props.list2.map((name) => (
            <li key={name}>
              <span> {name} </span>
              <button onClick={() => props.onActivateFriend(name)}> Activate </button>
            </li>
          ))}
        </ul>
      </div>
    )
  };
  
  // Class component can specify what the UI will be by utilizing a render method 
  class App extends React.Component {
    constructor(props) {
        super(props) 
  
        // instances that are living in the state of the main React Component   
        this.state = {
            activeFriends: ['Eric', 'Antron', 'Jose'],
            inactiveFriends: ['Mark'],
            input: '',
        }
  
        // need to add a property to your constructor class that binds the 'this' keyword to the super class component instance 
        this.handleAddFriend = this.handleAddFriend.bind(this)
        this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
        this.handleActivateFriend = this.handleActivateFriend.bind(this)
        this.handleDeactivateFriend = this.handleDeactivateFriend.bind(this)
        this.handleClearAll = this.handleClearAll.bind(this)
        this.updateInput = this.updateInput.bind(this)
        
    }
  
    handleAddFriend(name) {
      this.setState((currentState) => {
        return {
          activeFriends: currentState.activeFriends.concat([this.state.input]),
          input: ''
        }
      })
    }
  
    handleRemoveFriend(name) {
      this.setState((currentState) => {
        return {
          activeFriends: currentState.activeFriends.filter((friend) => friend != name)
        }
      })
    }
  
    handleActivateFriend(name) {
      this.setState((currentState) => {
        return {      
          activeFriends: currentState.activeFriends.concat(name),
          inactiveFriends: currentState.inactiveFriends.filter((friend) => friend != name)
        }
      })
    }
  
    handleDeactivateFriend(name) {
      this.setState((currentState) => {
        return {
          inactiveFriends: currentState.inactiveFriends.concat(name),
          activeFriends: currentState.activeFriends.filter((friend) => friend != name)
        }
      })
    }
  
    handleClearAll() {
      this.setState((currentState) => {
        return {
          activeFriends: [],
          inactiveFriends: []
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
          <button onClick = {this.handleAddFriend}> Submit </button>
          <button onClick = {this.handleClearAll}> Clear All </button>
          <FriendsList 
            list = {this.state.activeFriends}
            list2 = {this.state.inactiveFriends}
            onRemoveFriend = {this.handleRemoveFriend}
            onActivateFriend = {this.handleActivateFriend}
            onDeactivateFriend = {this.handleDeactivateFriend}
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