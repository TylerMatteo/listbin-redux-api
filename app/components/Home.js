const React = require('react');
const Listlist = require('./Listlist');

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Listlist />
            </div>
        )
    }
}

module.exports = Home;