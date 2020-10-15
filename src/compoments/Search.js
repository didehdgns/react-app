import React from 'react';
import { VscSearch } from "react-icons/vsc";
import './Search.css'

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        }
    }
    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState( state:{query:query, loading: true, message: ''});
      };
    render(){
        const {query} = this.state;
       
        return (
            <div className="search_container">
                <h2 className="search_heading">
                    Live Search: React Application
                </h2>
                <label className="search_label" htmlFor="search-input">
                    <input type="Text"
                    name="query"
                    value={query}
                    id="search-input"
                    placeholder="Search..."
                    onChange={this.handleOnInputChange}></input>
                    <VscSearch className="search_icon" />
                </label>
            </div>
        )
    }
}

export default Search;