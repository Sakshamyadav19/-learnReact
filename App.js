const root = ReactDOM.createRoot(document.getElementById('root'));


const heading = React.createElement('h1', {
    id:"header"
}, [
    'I am Parent',
    React.createElement(
        'h2',
        {id:'child'},
        'I am child'
)]);

console.log(heading,root);


root.render(heading);