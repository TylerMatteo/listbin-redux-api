import React from 'react';
import AddItemForm from '../components/AddItemForm';
import ItemList from '../components/ItemList';
import { getCommentsByArticleId, getListWithItemsById } from '../reducers/index';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    console.log(getListWithItemsById(state, ownProps.match.params.listId));
    return {list: getListWithItemsById(state, ownProps.match.params.listId)}
};


// const ConnectedList = () => (
//     <p>Here's a list</p>
// )

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


const List = connect(mapStateToProps)(ConnectedList);

export default List;