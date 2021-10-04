import { useState } from 'react';
import '../App.css';
function HelloWorld(props) {
    let [lastName, setLastName] = useState('Thakur');
    return <div>
        <div className="color-red">
            <strong>First Name:</strong> {props.name}
        </div>
        <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <h3>{lastName}</h3>
    </div>;
}
export default HelloWorld;


// State -> State are the props of your own(that we can mutate / change) and use