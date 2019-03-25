const React = require('react');
const AddItemForm = require('./AddItemForm');
const ItemList = require('./ItemList');

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            adding: false
        }

        this.showAdd = this.showAdd.bind(this);
        this.hideAdd = this.hideAdd.bind(this);
        this.addToList = this.addToList.bind(this);
    }

    addToList(createdBy, title, content) {
        this.setState({ adding: false });
        this.props.addItem(
            this.props.list.id,
            createdBy,
            title, 
            content
        )
    }

    showAdd() {
        this.setState({ adding: true })
    }

    hideAdd() {
        this.setState({ adding: false })
    }
    
    render() {
        return (
            <div className="list">
                <h1>{this.props.list.name}</h1>

                { this.state.adding
                    ? <AddItemForm onSubmit={this.addToList} onCancel={this.hideAdd} />
                    : <button className="add-item-button" onClick={ this.showAdd }>Add Item</button>
                }
                
                <ItemList items={this.props.list.items} />
            </div>
        );
    }
}

module.exports = List;