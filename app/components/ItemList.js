import React from 'react';
import { NavLink } from 'react-router-dom'
import Moment from 'moment';

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
                    <li key={item.get("id")} className="list-item">
                        <NavLink to={`/${item.get("id")}`}>
                            <header>
                                <h3>{item.get("title")}</h3>
                                <p>Added by {item.get("createdBy")} on {Moment(item.get("createdAt")).format("dddd, MMMM Do YYYY [at] h:mm a")}</p>
                            </header>
                            <p>{excerpt(item.get("content"), 20)}</p>
                        </NavLink>
                    </li>
                )
            }
        </ul>
    )
}

export default Itemlist;