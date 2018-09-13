import React from 'react';
import ReactDOM from 'react-dom';
// import {AppContainer} from 'react-hot-loader';


export default class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>teaassds {this.props.name}</div>
    }
}

ReactDOM.render(<App name="doreen"/>,document.getElementById('root'));


if(module.hot){
    module.hot.accept();
}