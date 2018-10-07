const React = require('react');
var NavLink = require('react-router-dom').NavLink;

class Listlist extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <ul>
                {
                    this.props.lists.map(
                        (list) => <li key={list.id}>
                    
                    <NavLink activeClassName="active" to={`/${list.id}`}>
                        {list.name}
                    </NavLink>
                    </li>)
                }
            </ul>
        )
    }
}

module.exports = Listlist;