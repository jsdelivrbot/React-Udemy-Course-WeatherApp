/**
 * Created by Andrey on 5/8/17.
 */
import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        // this.state = components state, not the application one
        this.props.fetchWeather(this.state.term);

        // clear the search-bar for an additional convenience
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
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

// now we can write 'this.props.fetchWeather()' inside this container
// because our action creator (fetchWeather) is being hooked up with redux
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);