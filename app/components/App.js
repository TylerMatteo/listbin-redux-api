const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Home = require('./Home');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        )
    }
}

module.exports = App;