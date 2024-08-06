import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp() {
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherUser = " tanay mahendra mukadam"


const AnotherElement = (
    <a href="http://google.com" target="_blank">Click Here to Visit Google</a>
)

const reactElement = React.createElement(
    'a',
    {href: "https://google.com", 
     target: '_blank' },
     "Click me to Google",
     anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement 
)
