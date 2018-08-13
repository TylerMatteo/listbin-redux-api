const React = require('react');

class Listlist extends React.Component {
    render() {
        return (
            <ul>
                {[1,2,3].map((num) => <li>{num}</li>)}
            </ul>
        )
    }
}

module.exports = Listlist;