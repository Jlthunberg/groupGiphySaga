import React, { Component } from 'react'

export class ResultsItem extends Component {

    state = {
        url: '',
        favorite: ''
    }

    favoriteClick= () =>{
        console.log('in favorite click', this.state );
        this.props.dispatch({
            type: 'ADD_FAVORITE', 
            payload: this.state
         });
    }// end favoriteClick

    handleFavorite = (event) => {
        console.log('in handleFav:', event.target.value, this.props.gif.images.original.url);
        this.setState({
            favorite: event.target.value,
            url: this.props.gif.images.original.url
        }); 
        // this.props.dispatch({
        //     type: 'ADD_FAVORITE', 
        //     payload: this.state
        //  }); 

    }// handleFavorite

    render() {
        return (
            <div>
                   <img src= {this.props.gif.images.original.url}/> 
                   <br/>
                
                   <select value={this.state.favorite} onChange={this.handleFavorite}>
                        <option value="">❤️</option>
                       <option value="1">funny</option>
                       <option value="2">cohort</option>
                       <option value="3">cartoon</option>
                       <option value="4">nsfw</option>
                       <option value="5">meme</option>
                   </select>
                   <button onClick = {this.favoriteClick}> Save your add </button> 
            </div>
        )
    }
}

export default ResultsItem
