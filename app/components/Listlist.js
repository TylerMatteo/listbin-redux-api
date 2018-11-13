const React = require('react');
const NavLink = require('react-router-dom').NavLink;

function Listlist(props) {

        return (
            <ul className="list-list">
                {
                    props.lists.map((list) => 
                        <li 
                            key={list.id}
                            >
                            <NavLink to={`/${list.id}`}>
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

module.exports = Listlist;