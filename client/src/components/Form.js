import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form>
                <input name="search" type="text" onChange={this.props.handleInputChange} value={this.props.value} />
                <button onClick={this.props.handleFormSubmit}>Search</button>
            </form>
        );
    }
}

export default Form;