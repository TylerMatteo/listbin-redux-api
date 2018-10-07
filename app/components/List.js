const React = require('react');
const AddItemForm = require('./AddItemForm');
const ItemList = require('./ItemList');

class List extends React.Component {
    constructor(props) {
        super(props);

        this.addToList = this.addToList.bind(this);
    }

    addToList(creator, content) {
        this.props.addItem(
            this.props.list.id,
            creator, 
            content
        )
    }
    
    render() {
        return (
            <div>
                <AddItemForm onSubmit={this.addToList} />
                <span>{this.props.list.id}</span>
                <ItemList items={this.props.list.items} />
            </div>
        );
    }
}

module.exports = List;