import React, { Component } from 'react'

export default class RestDemo extends Component {
    componentDidMount() {
        this.getUserList();
    }
    render() {
        return (
            <div>
                <h1>This is a REST API DEMO</h1>
            </div>
        )
    }
    getUserList = () => {
        console.log('Inside getUserList');
        const URL = 'https://dummyapi.io/data/v1/user';
        const APP_ID = '616e6b76354fcd73f1e25586';
        fetch(URL, {
            method: 'GET',
            headers: {
                'app-id': APP_ID
            }
        })
            .then(data => data.json())
            .then(response => {
            console.table(response.data);
        }, error => {
            console.log(error);
        })

    }
}

// fetch - JS API to call the REST APIs

