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