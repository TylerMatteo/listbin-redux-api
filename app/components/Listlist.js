const React = require('react');
var NavLink = require('react-router-dom').NavLink;

class Listlist extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <ul className="list-list">
                {
                    this.props.lists.map((list) => 
                        <li 
                            key={list.id}
                            >
                            <NavLink activeClassName="active" to={`/${list.id}`}>
                                <div className="list-left">
                                    <h3>{list.name}</h3>
                                </div>
                                <div className="list-right">
                                    {list.items.length}
                                </div>
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        )
    }
}

module.exports = Listlist;