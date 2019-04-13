const React = require('react');

class AddListForm extends React.Component {
    constructor(props) {
        super(props)

        // Since only this component is concerned about this controlled component state, we can keep it
        // here instead of the redux store
        this.state = {
            createdBy: '',
            name: '',
            unit: '',
            description: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })   
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({
            createdBy: this.state.createdBy,
            name: this.state.name,
            unit: this.state.unit,
            description: this.state.description
        })
        this.setState({
            createdBy: '',
            name: '',
            unit: '',
            description: ''
        })
    }

    render() {
        return (
            <form className="add-list" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="createdBy" 
                    value={this.state.createdBy}
                    onChange={this.handleChange}
                    placeholder="Your Name" />
                <input 
                    type="text" 
                    name="name" 
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="List Name" />
                <input 
                    type="text" 
                    name="unit" 
                    value={this.state.unit}
                    onChange={this.handleChange}
                    placeholder='Unit Name. Was is this a list of? (As the singular. Think "meme", not "memes".)' />
                <textarea 
                    name="description" 
                    cols="30" rows="10"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="List Description">
                </textarea>
                <div className="actions">
                    <button 
                        className="button"
                        type='submit'>
                        Submit
                    </button>
                    <button onClick={ this.props.onCancel }>Cancel</button>
                </div>
            </form>
        )
    }
}

module.exports = AddListForm;