import React, { Component } from 'react'; 
import FavoritesItem from '../FavoritesItem/FavoritesItem'; 
import {connect} from 'react-redux'; 


export class FavoritesList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.reduxState.reducerTwo.map((gif) => {
                        return (
                            <FavoritesItem key={gif.id} gif={gif} dispatch={this.props.dispatch} />
                        )
                    })}
                </ul> 
                
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({reduxState}); 

export default connect(mapReduxStateToProps)(FavoritesList);

