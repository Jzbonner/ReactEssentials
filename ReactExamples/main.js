function NameComponent(props) { //In React Components are capitalized in the same vein as a Constructor is capitalized in plain JS
    return React.createElement(
        'h1',
        null,
        props.name
    )
};

function HandleComponent(props) {
    return React.createElement(
        'h3',
        null,
        props.handle
    )
};


const wrapperElement = React.createElement(
    'div',
    {id: 'container'},
    React.createElement(NameComponent, {name: 'Jarrett Bonner'}),
    React.createElement(HandleComponent, {handle: '@jarrett.bonner'})
);

ReactDOM.render(
    wrapperElement, 
    document.getElementById('app')
);

console.log('wrapperElement',wrapperElement);