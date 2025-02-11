import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }

    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
        console.log("count:", this.state.count);
    }
    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 }, () => { console.log("callback", this.state.count) })
        console.log("sync:", this.state.count);
    }
    handleReset = () => {
        this.setState({ count: 0 });
    }


    render() {
        return (
            <>
                <div>
                    <h1>Counter : {this.state.count}</h1>
                    <button onClick={this.handleIncrement}>+</button>
                    <button onClick={this.handleReset}>reset</button>
                    <button onClick={this.handleDecrement}>-</button>
                </div>
            </>
        )
    }
}

export default Counter 