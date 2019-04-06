const React = require('react');
const Listlist = require('./Listlist');
const AddListForm = require('./AddListForm');

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            adding: false
        }

        this.showAdd = this.showAdd.bind(this);
        this.hideAdd = this.hideAdd.bind(this);
        this.addList = this.addList.bind(this);
    }

    showAdd() {
        this.setState({ adding: true })
    }

    hideAdd() {
        this.setState({ adding: false })
    }

    addList(createdBy, name, unit, description) {
        this.setState({ adding: false });
        this.props.addList(createdBy, name, unit, description);
    }
    
    render() {
        return (
            <div className="home">
                <h2>Lists</h2>
                
                { this.state.adding
                    ? <AddListForm onSubmit={this.addList} onCancel={this.hideAdd} />
                    : <button className="add-list-button" onClick={ this.showAdd }>Add List</button>
                }
                
                <Listlist lists={this.props.lists} />
            </div>
        )
    }
}

module.exports = Home;