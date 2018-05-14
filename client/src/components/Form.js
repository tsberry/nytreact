import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search Term</label>
                    <input name="search" id="search" className="form-control" type="text" onChange={this.props.handleInputChange} value={this.props.search} />
                </div>
                <div className="form-group">
                    <label htmlFor="start-year">Start Year</label>
                    <input name="startYear" id="start-year" className="form-control" type="text" onChange={this.props.handleInputChange} value={this.props.startYear} />
                </div>
                <div className="form-group">
                    <label htmlFor="end-year">End Year</label>
                    <input name="endYear" id="end-year" className="form-control" type="text" onChange={this.props.handleInputChange} value={this.props.endYear} />
                </div>
                <button className="btn btn-lg btn-primary" onClick={this.props.handleFormSubmit}>Search</button>
            </form>
        );
    }
}

export default Form;