const React = require('react');
const Listlist = require('./Listlist');
const AddListForm = require('./AddListForm');

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            adding: false,
            lists: []
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
    
    render() {
        return (
            <div>
                <h1>Home</h1>
                
                { this.state.adding
                    ? <AddListForm onSubmit={this.props.addList} onCancel={this.hideAdd} />
                    : <button onClick={ this.showAdd }>Add List</button>
                }
                
                <Listlist lists={this.props.lists} />
            </div>
        )
    }
}

module.exports = Home;