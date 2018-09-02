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
        this.populateLists = this.populateLists.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        
    }

    showAdd() {
        this.setState({ adding: true })
    }

    hideAdd() {
        this.setState({ adding: false })
    }

    populateLists() {
        const lists = [
            {
                id: 1,
                name: "list 1",
                description: "this is list 1"
            },
            {
                id: 2,
                name: "list 2",
                description: "this is list 2"
            },
            {
                id: 3,
                name: "list 3",
                description: "this is list 3"
            }
        ]

        this.setState((prevState) => {
            return {
                lists: [...prevState.lists, ...lists]
            }
        })
    }

    handleSubmit(name, description) {

        const id = Date.now();
        this.setState((prevState) => {
            return {
                lists: [...prevState.lists, {id, name, description}]
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>Home</h1>
                
                { this.state.adding
                    ? <AddListForm onSubmit={this.handleSubmit} onCancel={this.hideAdd} />
                    : <button onClick={ this.showAdd }>Add List</button>
                }

                <button onClick={ this.populateLists }>mock</button>
                
                <Listlist lists={this.state.lists} />
            </div>
        )
    }
}

module.exports = Home;