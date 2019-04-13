import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import List from '../containers/List';

const App = () => (
        <div>
            <header>
                <h1>
                    ListBin
                </h1>
            </header>
            <BrowserRouter>
                <div className="container">
                    <Route exact path="/" component={Home} />}/>
                    <Route exact path="/:listId" component={List} />}/>
                </div>
            </BrowserRouter>
        </div>
    );

export default App;

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         lists: []
    //     }

    //     this.addList = this.addList.bind(this);
    //     this.addItem = this.addItem.bind(this);
    // }

    // addList(createdBy, name, unit, description) {
    //     const id = uuid();
    //     const createdAt = Date.now();
    //     this.setState((prevState) => {
    //         return {
    //             lists: [...prevState.lists, {id, name, unit, description, createdBy, createdAt, items: []}]
    //         }
    //     });
    // }

    // addItem(listId, createdBy, title, content) {
    //     this.setState((prevState) => {
    //         const i = prevState.lists.findIndex(list => list.id === listId);

    //         return {
    //             lists: [
    //                 ...prevState.lists.slice(0, i),
    //                 {
    //                     ...prevState.lists[i],
    //                     items: [
    //                         ...prevState.lists[i].items,
    //                         {
    //                             id: uuid(),
    //                             createdAt: Date.now(),
    //                             createdBy,
    //                             title,
    //                             content
    //                         }
    //                     ]
    //                 },
    //                 ...prevState.lists.slice(i+1)
    //             ]
    //         }

    //         // return prevState;
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             <header>
    //                 <h1>
    //                     ListBin
    //                 </h1>
    //             </header>
    //             <BrowserRouter>
    //                 <div className="container">
    //                     <Route exact path="/" render={() => <Home lists={this.state.lists} addList={this.addList} />}/>
    //                     <Route exact path="/:listId" render={({ match }) => <List list={ this.state.lists.find(list => list.id === match.params.listId)} addItem={this.addItem} />}/>
    //                     {/* <Route exact path="/lists" component={Home}>
    //                         <Route exact path="/lists/:id" component={Home} />
    //                     </Route>
    //                     <Route exact path="/list/:id" component={List} /> */}
    //                 </div>
    //             </BrowserRouter>
    //         </div>
    //     )
    // }
// }

// module.exports = App;