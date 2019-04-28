import React from 'react';
import AddItemForm from '../components/AddItemForm';
import ItemList from '../components/ItemList';
import { getListWithItemsById } from '../reducers/index';
import { connect } from 'react-redux';
import { addItem } from "../actions/Item";

const mapStateToProps = (state, ownProps) => {
    return {list: getListWithItemsById(state, ownProps.match.params.listId)}
};

function mapDispatchToProps(dispatch) {
    return {
        addItem: (item, listId) => dispatch(addItem({item, listId}))
    };
}

class ConnectedList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            adding: false
        }

        this.showAdd = this.showAdd.bind(this);
        this.hideAdd = this.hideAdd.bind(this);
        this.addToList = this.addToList.bind(this);
    } 

    addToList(item) {
        this.setState({ adding: false });
        this.props.addItem(item, this.props.list.get("id"))
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
                <h1>{this.props.list.get("name")}</h1>

                { this.state.adding
                    ? <AddItemForm onSubmit={this.addToList} onCancel={this.hideAdd} />
                    : <button className="add-item-button" onClick={ this.showAdd }>Add Item</button>
                }
                
                <ItemList items={this.props.list.get("items")} />
            </div>
        );
    }
}


const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;