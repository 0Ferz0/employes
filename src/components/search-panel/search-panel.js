import { Component } from "react"

import AppFilter from "../app-filter/app-filter"

import "./search-panel.css"


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    onUpdateSearch1 = (e) => {
        const term = e.target.value
        this.setState({ term })
        this.props.onUpdateSearch(term)

    }


    render() {
        return (
            <div className="search-panel">
                <input type="text"
                    className="form-control search-input"
                    placeholder="Найти студента"
                    value={this.state.term}
                    onChange={this.onUpdateSearch1} />
                <AppFilter onChange={this.props.onChangeFilter} />
            </div>
        )
    }
}



export default SearchPanel
