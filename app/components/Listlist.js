const React = require('react');

class Listlist extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <ul>
                {this.props.lists.map((list) => <li key="list.id">{list.name}</li>)}
            </ul>
        )
    }
}

module.exports = Listlist;