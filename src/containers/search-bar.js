/**
 * Created by Andrey on 5/8/17.
 */
import React from "react";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-days forecast in your city..."
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}