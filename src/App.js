import React, { Component } from "react";

const API = 'https://www.facebook.com/events/';
const DEFAULT_QUERY = '666958530825467/';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
        };
    }

    componentDidMount() {
        fetch( API + DEFAULT_QUERY)
            .then(response => response.json())
            .then(data => this.setState({ hits: data.hits }));
    }

    render() {
        const { hits } = this.state;

        return (
            <ul>
                {hits.map(hit =>
                    <li key={hit.date}>
                        <a href={hit.url}>{hit.title}</a>
                    </li>
                )}
            </ul>
        );
    }
}

export default App;
