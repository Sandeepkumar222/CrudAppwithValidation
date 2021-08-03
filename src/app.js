import React, {Component} from 'react'

// import Counter from './counter'

// import JobApp from './JobApp'

import 'bootstrap/dist/css/bootstrap.min.css';

// import Crud from './CrudAppFunc'
import Routing from './Routing';

class App extends Component{
    constructor(){
        super();
        this.state ={
            show : false,
        }
    }
    // showCom = () =>{
    //     this.setState({show : !this.state.show})
    // }
    
    render(){
    return <>
    {/* <button onClick = {this.showCom}>Show/hide</button>
    {this.state.show ? <Counter />:<></>} */}
    {/* <JobApp/> */}
    {/* <Crud /> */}
    <Routing/>
    </>
    }
}

export default App;