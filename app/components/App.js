const React = require('react');
const ReactRouter = require('react-router-dom');
const BrowserRouter = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Home = require('./Home');
const Listlist = require('./Listlist');
const List = require('./List');
const uuid = require('uuid/v1');

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lists: []
        }

        this.addList = this.addList.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addList(createdBy, name, description) {
        const id = uuid();
        const createdAt = Date.now();
        this.setState((prevState) => {
            return {
                lists: [...prevState.lists, {id, name, description, createdBy, createdAt, items: []}]
            }
        });
    }

    addItem(listId, createdBy, title, content) {
        this.setState((prevState) => {
            const i = prevState.lists.findIndex(list => list.id === listId);

            return {
                lists: [
                    ...prevState.lists.slice(0, i),
                    {
                        ...prevState.lists[i],
                        items: [
                            ...prevState.lists[i].items,
                            {
                                id: uuid(),
                                createdAt: Date.now(),
                                createdBy,
                                title,
                                content
                            }
                        ]
                    },
                    ...prevState.lists.slice(i+1)
                ]
            }

            // return prevState;
        })
    }

    render() {
        return (
            <div>
                <header>
                    <h1>
                        ListBin
                    </h1>
                </header>
                <BrowserRouter>
                    <div className="container">
                        <Route exact path="/" render={() => <Home lists={this.state.lists} addList={this.addList} />}/>
                        <Route exact path="/:listId" render={({ match }) => <List list={ this.state.lists.find(list => list.id === match.params.listId)} addItem={this.addItem} />}/>
                        {/* <Route exact path="/lists" component={Home}>
                            <Route exact path="/lists/:id" component={Home} />
                        </Route>
                        <Route exact path="/list/:id" component={List} /> */}
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

module.exports = App;