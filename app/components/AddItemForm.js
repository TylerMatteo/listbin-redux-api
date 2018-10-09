const React = require('react');

class AddItemForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            content: '',
            createdBy: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const { value, name } = target;

        this.setState({
            [name]: value
        })   
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(
            this.state.createdBy,
            this.state.content
        )
        this.setState({
            createdBy: '',
            content: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="createdBy" 
                    value={this.state.createdBy}
                    onChange={this.handleChange}
                    placeholder="Your Name" />
                <textarea 
                    name="content" 
                    cols="30" rows="10"
                    value={this.state.content}
                    onChange={this.handleChange}
                    placeholder="Content">
                </textarea>
                <button 
                    className="button"
                    type='submit'>
                    Submit
                </button>
            </form>
        )
    }
}

module.exports = AddItemForm;