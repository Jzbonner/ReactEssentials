/* API functionality for predetermined data */ 

window.API = {
  fetchPopularRepos(language) {
    // "language" can be "javascript", "ruby", "python", or "all"
    const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
    return fetch(encodedURI)
      .then((data) => data.json())
      .then((repos) => repos.items)
      .catch((error) => {
        console.warn(error)
        return null
      });
  }
}

/* Class information for the React Loading Component  */

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Loading'
    };
  }

  componentDidMount() {
    const stopper = this.state.text + '...';
    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text: 'Loading' }))
        : this.setState((prevState) => ({ text: prevState.text + '.' }))
    }, 300)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <h1>
        {this.state.text}
      </h1>
    )
  }
}

/* The Class that contains the embodiment of our Application */

class App extends React.Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

/* ReactDom Render of the above application */

ReactDOM.render(
  <App />,
  document.getElementById('app')
)