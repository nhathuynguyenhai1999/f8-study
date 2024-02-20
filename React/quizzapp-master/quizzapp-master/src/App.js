import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

class ReactComponent {
    render(){
        return(<div>console.log("Running the code")</div>)
    }
}

export default class App extends ReactComponent {
    render() {
        return (
            <div>
                <h1>
                    Hello . This is my App
                </h1>
            </div>
    );
    }
}
export default App;
class App extends React.Component {
    render(){
        return <div>Hello , this is my App</div>
    }
}