import React from 'react';
import uuid from 'uuid';

class AddItemForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            adding: false,
            content: '',
            createdBy: '',
            title: ''
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
        this.props.onSubmit({
            id: uuid(),
            createdBy: this.state.createdBy,
            createdAt: Date.now(),
            title: this.state.title,
            content: this.state.content
        })
        this.setState({
            createdBy: '',
            title: '',
            content: '',
            adding: false
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
                <input 
                    type="text" 
                    name="title" 
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Title" />
                <textarea 
                    name="content" 
                    cols="30" rows="10"
                    value={this.state.content}
                    onChange={this.handleChange}
                    placeholder="Content">
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

export default AddItemForm;