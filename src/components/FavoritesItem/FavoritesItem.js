import React, { Component } from 'react'

export class FavoritesItem extends Component {
    render() {
        return (
            <div>
                <img src={this.props.gif.url} /> 
            </div>
        )
    }
}

export default FavoritesItem
