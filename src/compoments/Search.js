import React from 'react';
import { VscSearch } from "react-icons/vsc";
import './Search.css';
import axios from 'axios'

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        }

        this.cancel = '';
    }

    fetchSearchResults = (updatedPageNo = '', query) => {
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        const searchUrl = `https://game-app-9c71b.firebaseio.com/data/games/${query}.json`

        if( this.cancel){
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();

        axios.get(searchUrl, {
            cancelToken: this.cancel.token
        })
        .then(res => {
            // const resultNotfoundMsg = 
            console.warn(res.data);
        })
        .catch(error => {
            if(axios.isCancel(error) || error){
                this.setState({
                    loading:false,
                    message: 'Faled to fetch the data, Please check network'
                })
            }
        })
    }
    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState( {query:query, loading: true, message: ''},() => {
            this.fetchSearchResults(1, query);
        });
        
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