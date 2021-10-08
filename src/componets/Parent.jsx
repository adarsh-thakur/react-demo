import React, { Component, useState } from 'react'
import '../styles/Home.css';
import Child from './Child';
// export default class Parent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             inputValue:'Anchit'
//         };
//     }
//     render() {
//         return (
//             <div className="wrapper">
//                 Hello Parent
//                 <Child
//                     inputValue={this.state.inputValue}
//                     onNameInputChange={(value) => this.setState({inputValue:value})}
//                 />
//             </div>
//         )
//     }
// }

export default function Parent() {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="wrapper">
            Hello Parent as a Functional Component
            <Child
                inputValue={inputValue}
                onNameInputChange={(value) => setInputValue(value)}
            />
        </div>
    );
}
