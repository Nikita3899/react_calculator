import {Component} from 'react'

class Counter extends Component{
    state = {
        start:0
    }
 
    add = ()=>{
        this.setState(({start})=>({
            start: start + 1
        }));

    };

     sub= ()=>{
        this.setState(({start})=>({
            start: start - 1
        }));

    };

    reset = ()=>{
        this.setState(({start})=>({start:0}));
    }

    render(){
    return(
        <div className="app-content">
        <div> Counter App</div>
        <p>{this.state.start}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.sub}>subtract</button>
        <button onClick={this.reset}>Reset</button>
        </div>
    )
    }
}

export default Counter;