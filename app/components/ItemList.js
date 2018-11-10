const React = require('react');

function Itemlist(props) {
    return (
        <ul>
            {
                props.items.map(
                    (item) => <li key={item.id}>{item.title},{item.content}</li>)
            }
        </ul>
    )
}

module.exports = Itemlist;