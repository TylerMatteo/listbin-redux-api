const React = require('react');
const NavLink = require('react-router-dom').NavLink;
const pluralize = require('pluralize');

function Listlist(props) {

        return (
            <ul className="list-list">
                {
                    props.lists.map((list) => 
                        <li className="list-list-item"
                            key={list.id}
                            >
                            <NavLink to={`/${list.id}`}>
                                <div className="list-left">
                                    <h3>{list.name}</h3>
                                </div>
                                <div className="list-right">
                                    <span>{list.items.length} {pluralize(list.unit, list.items.length)}</span>
                                </div>
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        )

}

module.exports = Listlist;