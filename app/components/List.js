const React = require('react');
const AddItemForm = require('./AddItemForm');
const ItemList = require('./ItemList');

class List extends React.Component {
    constructor(props) {
        super(props);

        this.addToList = this.addToList.bind(this);
    }

    addToList(createdBy, content) {
        this.props.addItem(
            this.props.list.id,
            createdBy, 
            content
        )
    }
    
    render() {
        return (
            <div>
                <AddItemForm onSubmit={this.addToList} />
                <ItemList items={this.props.list.items} />
            </div>
        );
    }
}

module.exports = List;