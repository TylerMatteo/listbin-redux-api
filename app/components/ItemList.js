const React = require('react');
// var NavLink = require('react-router-dom').NavLink;

function Itemlist(props) {
    return (
        <ul>
            {
                props.items.map(
                    (item) => <li key={item.id}>{item.content}</li>)
            }
        </ul>
    )
}

module.exports = Itemlist;