import React from 'react';
import { VscSearch } from "react-icons/vsc";
import './Search.css';
import axios from 'axios'
import SearchGame from './SearchGame';

class Search extends React.Component{
    state = {
        isLoading:true,
        games:[],
        value:""
    };

    getSearchGame = async () => {
        
        const search = this.state.value;
        try {
            if (search === ""){
                this.setState({games:[], isLoading: false})
            } else {
                const {data: {
            games}} = await axios.get('https://game-app-9c71b.firebaseio.com/data.json',{
                param:{
                    query: search,
                    
                }
                
            });
            this.setState({games: games, isLoading:false});
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount(){
        this.getSearchGame();
    }

    handleChange = (e: any) =>{
        this.setState({value: e.target.value});
        console.log(e.target.value);
        
    };

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.getSearchGame();
    };

    render(){
        const {games, isLoading} = this.state;
        return (
            <selection className="container">
                {
                    isLoading ? (
                        <div className="loader">
                            <span className="loader__text">Loading...</span>
                        </div>
                    ) : (
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <div className="input_div">
                                    <h1>게임 검색</h1>
                                    <input 
                                    className="input_search"
                                    type="text"
                                    value={this.state.value}
                                    onChange={this.handleChange} placeholder="원하는 게임을 입력하세요"
                                    />
                                </div>
                                <div className="games">
                                    {games.map((game) =>(
                                        <SearchGame
                                            key={game.id}
                                            id={game.id}
                                            year={game.year}
                                            rdate={game.rdate}
                                            etitle={game.etitle}
                                            title={game.title}
                                            summary={game.summary}
                                            poster={game.cover_img}
                                            genres={game.genres}
                                            userscore={game.userscore}
                                            supportLang={game.supportLang}
                                            grade={game.grade}
                                            platform={game.platform}
                                            product={game.product}
                                            distributor={game.distributor}
                                            minOS={game.minOS}
                                            minCPU={game.minCPU}
                                            minGraphic={game.minGraphic}
                                            minMemory={game.minMemory}
                                            minStorage={game.minStorage}
                                            recOS={game.recOS}
                                            recCPU={game.recCPU}
                                            recGraphic={game.recGraphic}
                                            recMemory={game.recMemory}
                                            recStorage={game.recStorage}
                                            />

                                    ))}
                                </div>
                            </div>
                        </form>
                    )
                }
            </selection>
        )
    }
}

export default Search;