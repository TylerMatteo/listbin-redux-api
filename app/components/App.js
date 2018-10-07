const React = require('react');
const ReactRouter = require('react-router-dom');
const BrowserRouter = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Home = require('./Home');
const Listlist = require('./Listlist');
const List = require('./List');

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lists: []
        }

        this.addList = this.addList.bind(this);
    }

    addList(name, description) {
        const id = Date.now();
        this.setState((prevState) => {
            return {
                lists: [...prevState.lists, {id, name, description}]
            }
        });
    }

    // addToList(listId, item) {
    //     this.setState((prevState) => {
    //         return {

    //         }
    //     })
    // }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Route exact path="/" render={() => <Home lists={this.state.lists} addList={this.addList} />}/>
                    <Route exact path="/:listId" render={({ match }) => <List list={ this.state.lists.find((list) => {
                        console.log(list.id, match.params.listId);
                        return list.id === parseInt(match.params.listId);
                    })}/>}/>
                    {/* <Route exact path="/lists" component={Home}>
                        <Route exact path="/lists/:id" component={Home} />
                    </Route>
                    <Route exact path="/list/:id" component={List} /> */}
                </div>
            </BrowserRouter>
        )
    }
}

module.exports = App;