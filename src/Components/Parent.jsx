import React from "react";
import Child from "./Child";

class Parent extends React.Component{
    render(){
        const name="Naanu";
        console.log(this.props)
        return (
            <div>
                {name ? <Child people = {this.props.people}/> : <h1>There is no name</h1>}

                <h1>Parent : {this.props.values} - {this.props.names} </h1>

                <Child people={this.props.people}/>
            </div>
        )
    }
}

export default Parent;