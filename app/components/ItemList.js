const React = require('react');
const NavLink = require('react-router-dom').NavLink;
const Moment = require('moment');

function Itemlist(props) {

    function excerpt(content, length) {
        const words = content.split(' ');
        return words.length <= length
            ? words.join(' ')
            : words.slice(0, length).join(' ').concat('...');
    }

    return (
        <ul>
            {
                props.items.map((item) =>
                    <li key={item.id}>

                            <header>
                                <h3>{item.title}</h3>
                                <p>Added by {item.createdBy} on {Moment(item.createdAt).format("dddd, MMMM Do YYYY [at] h:mm a")}</p>
                            </header>
                            <p>{excerpt(item.content, 20)}</p>
                        
                    </li>
                )
            }
        </ul>
    )
}

module.exports = Itemlist;