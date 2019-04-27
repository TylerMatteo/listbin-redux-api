import React from 'react';
import AddItemForm from '../components/AddItemForm';
import ItemList from '../components/ItemList';
import { getCommentsByArticleId } from '../reducers/index';
import { connect } from 'react-redux';

// class List extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = { 
//             adding: false
//         }

//         this.showAdd = this.showAdd.bind(this);
//         this.hideAdd = this.hideAdd.bind(this);
//         this.addToList = this.addToList.bind(this);
//     } 

//     addToList(createdBy, title, content) {
//         this.setState({ adding: false });
//         this.props.addItem(
//             this.props.list.id,
//             createdBy,
//             title, 
//             content
//         )
//     }

//     showAdd() {
//         this.setState({ adding: true })
//     }

//     hideAdd() {
//         this.setState({ adding: false })
//     }
    
//     render() {
//         return (
//             <div className="list">
//                 <h1>{this.props.list.name}</h1>

//                 { this.state.adding
//                     ? <AddItemForm onSubmit={this.addToList} onCancel={this.hideAdd} />
//                     : <button className="add-item-button" onClick={ this.showAdd }>Add Item</button>
//                 }
                
//                 <ItemList items={this.props.list.items} />
//             </div>
//         );
//     }
// }

const mapStateToProps = (state, ownProps) => {
    // console.log(state.toJS());
    // let ids = state.getIn(["lists", "byId", ownProps.match.params.listId, "items"]);
    // console.log(ids);
    // const items = { ...ids } = state.getIn(["items", "byId"])
    // console.log(items);
    getCommentsByArticleId(state, ownProps.match.params.listId);
};


const ConnectedList = ({ items }) => (
    <p>Here's a list</p>
)

const List = connect(mapStateToProps)(ConnectedList);

export default List;