const React = require('react');
// var NavLink = require('react-router-dom').NavLink;

class Itemlist extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <ul>
                {
                    this.props.items.map(
                        (item) => <li key={item.id}>{item.content}</li>)
                }
            </ul>
        )
    }
}

module.exports = Itemlist;