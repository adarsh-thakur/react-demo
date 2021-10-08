import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <label htmlFor="name-input">Enter Your Name:</label>
                <input
                    type="text"
                    name="name-input"
                    id="name-input"
                    value={this.props.inputValue}
                    onChange={(event) => this.onChange(event)}
                />
            </div>
        )
    }
    onChange = (event) => {
        this.props.onNameInputChange(event.target.value);
    }
}
