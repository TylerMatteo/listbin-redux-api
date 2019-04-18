import React from 'react';
import { connect } from "react-redux";
import Listlist from '../components/Listlist';
import AddListForm from '../components/AddListForm';
import { addList } from "../actions/List";

const mapStateToProps = state => {
    console.log(state.getIn(["lists", "byId"]).toJS())
    return { lists: state.getIn(["lists", "byId"]) };
};

function mapDispatchToProps(dispatch) {
    return {
        addList: list => dispatch(addList(list))
    };
}

class ConnectedHome extends React.Component {
    constructor() {
        super();

        this.state = {
            adding: false
        }

        this.showAdd = this.showAdd.bind(this);
        this.hideAdd = this.hideAdd.bind(this);
    }

    showAdd() {
        this.setState({ adding: true })
    }

    hideAdd() {
        this.setState({ adding: false })
    }

    // addList(createdBy, name, unit, description) {
    //     this.setState({ adding: false });
    //     this.props.addList(createdBy, name, unit, description);
    // }
    
    render() {
        return (
            <div className="home">
                <h2>Lists</h2>
                { this.state.adding
                    ? <AddListForm onSubmit={this.props.addList} onCancel={this.hideAdd} />
                    : <button className="add-list-button" onClick={ this.showAdd }>Add List</button>
                }
                
                <Listlist lists={this.props.lists} />
            </div>
        )
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(ConnectedHome);

export default Home;