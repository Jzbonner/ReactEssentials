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

