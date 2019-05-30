const React = require("react");
const NavLink = require("react-router-dom").NavLink;
const pluralize = require("pluralize");

function Listlist(props) {
  return (
    <ul className="list-list">
      {props.lists.valueSeq().map(list => (
        <li className="list-list-item" key={list.get("id")}>
          <NavLink to={`/${list.get("id")}`}>
            <div className="list-left">
              <h3>{list.get("name")}</h3>
            </div>
            <div className="list-right">
              <span>
                {list.get("items").length}{" "}
                {pluralize(list.get("unit"), list.get("items").length)}
              </span>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

module.exports = Listlist;
