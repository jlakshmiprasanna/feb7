import React from "react";

class Child extends React.Component {
    render() {
        console.log(this.props)
        return (
            <>
                <ol type="A">
                    {this.props.people.map((person, index) => (
                        <>
                            <li>{person.name}</li>
                        </>

                    ))}
                </ol>
            </>
        )
    }
}

export default Child