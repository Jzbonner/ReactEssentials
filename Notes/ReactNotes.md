# Day 1 ~ React Development Basics 
React is a library for building user interfaces; There are four primary components of React: 
* Composition 
* Unidirectional Dataflow 
* Explicit Mutations 
* Just Javascript 

The first thing that makes React special is that you are able to compose all of these components together. Typically your entire application will be built up of compiled components. 

> How do you build a large app? By building a bunch of small apps and compiling those together 

```javascript 
<Container>
    <Navbar />
    <Header />
    <DatePicker>
        <Calendar />
    </DatePicker>
</Container>
```

Compiling those components together will allow you to derive an interface without being burdening by the overall complication of the application. Your application could be super complicated but by dissecting your application into simple parts it allows you to ignore the surface complexity and hone in on crafting the entire application without getting sidetracked by what lies beneath the React library. 

When thinking about components in React you need to think about two things: what state is this component going to be managing or what state is this component going to get from its parent component and the second thing is what is the UI going to look like for this component. 

Basic Javascript Composition |  
--- |

```javascript 
function getProfilePic (username) {
    return 'https://photo.fb.com/' + username
}

function gerProfileLink(username) {
    return 'https://fb.com/' + username 
}

function getAvatarInfo(username) {
    return {
        pic: getProfilePic(username),
        link: getProfileLink(username)
    }
}

getAvatarInfo('jarrett.bonner')
```
Basic React.js Composition | 
--- |

```javascript 
function ProfilePic(props) {
    return (
        <img src={'https://photo.fb.com' + props.username} />
    )
}

function ProfileLInk(props) {
    return (
        <a href={'https://www.fb.com/' + props.username}>
            {props.username}
        </a>
    )
}

function Avatar(props) {
    return (
        <div> 
            <ProfilePic username={props.username} />
            <ProfileLink username={props.username} />
        </div>
    )
}

<Avatar username="jarrett.bonner" />
```
### Unidirectional Data 
In jQuery you set up a bunch of event handlers that change the state of the DOM. However you can cause a bunch of confusion with the Data Flow of jQuery; a much more efficient way is to take the State out of the DOM and allow it to exist within your individual components. React is then responsible for rendering the actual UI. Again the only two things you have to think about are the _State_ of our components and then about how the _UI_ looks based off of that _State_.
* Your UI, in React, is just a function of your State
* Developers worry about managing the State of our application 
* React itself then renders the State that you manage 

### Explicit Mutations 
An example of rendering your UI application through the State could look like this: 

```javascript 
this.setState({
    handle: 'jarrett.bonner',
    authed: true
})
```

Having state separated into components allows you to have a very structured to update the state of your application, this idea is known as __Shared Mutable States__. 

A lot of React is mainly just JavaScript. It utilizes the same APIs and functionality from JavasScript. 



