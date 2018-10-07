const React = require('react');

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <span>{this.props.list.id}</span>
        )
    }
}

module.exports = List;