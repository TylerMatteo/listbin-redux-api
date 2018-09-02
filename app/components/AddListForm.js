const React = require('react');
const Listlist = require('./Listlist');

class AddListForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const { value, name } = target;
        console.log({value, name})

        this.setState({
            [name]: value
        })   
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(
            this.state.name,
            this.state.description
        )
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="List Name" />
                <textarea 
                    name="description" 
                    cols="30" rows="10"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="List Description">
                </textarea>
                <button 
                    className="button"
                    type='submit'>
                    Submit
                </button>
                <button onClick={ this.props.onCancel }>Cancel</button>
            </form>
        )
    }
}

module.exports = AddListForm;