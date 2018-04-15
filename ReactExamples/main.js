//You can't run all three simultaneously, that's why the first three are commented out. 

/*
const name = "Jarrett Bonner";
const handle = "@jarrett.bonner";

function NameComponent(props) {
  //In React Components are capitalized in the same vein as a Constructor is capitalized in plain JS
  return <h1>{props.name}</h1>;
};

function HandleComponent(props) {
  return <h3>{props.handle}</h3>;
};

function App() {
  return (
    <div id="container">
      <NameComponent name={name} />
      <HandleComponent handle={handle} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app1"));
*/

/* Example 1
function Badge(props) {
  return (
    <div>
      <img src={props.img} />
      <h1>Name: {props.name}</h1>
      <h3>username: {props.username}</h3>
    </div>
  );
};

ReactDOM.render(
  <Badge
    name="Jarrett Bonner"
    username="@jarrett.bonner"
    img="https://cdn2.iconfinder.com/data/icons/vehicles-7/24/vehicles-15-256.png"
  />,
  document.getElementById("app2")
);
*/

/* Example 2
const USER_DATA = {
  name: "Jarrett Bonner",
  img: "https://cdn2.iconfinder.com/data/icons/vehicles-7/24/vehicles-15-256.png",
  username: "@jarrett.bonner"
};

function Badge(props) {
  return (
    <div>
      <img src= {props.user.img} />
      <h1>Name: {props.user.name} </h1>
      <h3>username: {props.user.username} </h3>
    </div>
  );
};

ReactDOM.render(<Badge user={USER_DATA} />, document.getElementById("app3"));
*/ 

// Example 4
function Avatar(props) {
    return <img src={props.src} />
  }
  
  function Label(props) {
    return <h1>Name: {props.name} </h1>
  }
  
  function ScreenName(props) {
    return <h3>Username: {props.username} </h3>
  }
  
  function Badge(props) {
    const user = props.user

    return (
      <div>
        <Avatar src={user.img}/>
        <Label name={user.name}/>
        <ScreenName username={user.username} />
      </div>
    )
  }
  
  ReactDOM.render(
    <Badge user={{
      name: 'Jarrett Bonner',
      img: 'https://cdn2.iconfinder.com/data/icons/vehicles-7/24/vehicles-15-256.png',
      username: '@jarrett.bonner'
    }} />,
    document.getElementById('app4')
  )
