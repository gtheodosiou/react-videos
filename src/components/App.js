import React from 'react';
import SearchBar from './SearcBar';

export default class App extends React.Component {
    render () {
        return (
            <div className="ui container">
                <SearchBar/>
            </div>
        );
    }
}